import {
    CdkDrag,
    CdkDragDrop,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDragStart,
    CdkDropList,
    CdkDropListGroup
} from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, inject, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { CardState } from '../../../../../../enum';
import { FaceCardName } from '../../../../../../enum/facecards';
import { FaceCardStyle, ICard, IPile } from '../../../../../../interfaces';
import { Card } from '../../../../../../models/card';
import { cardRecord, GameHistory, HistoryData, moveHistory } from '../../../../../../models/game.history';
import { Draw, Foundation, Tableau } from '../../../../../../models/piles';
import { FaceCards } from '../../../../../../models/piles/decks';
import { AlertService } from '../../../../../../services/alert.service';
import { flatten } from '../../../../../../utils/array';

type DropPileType = 'foundations' | 'tableaus';

@Component({
  selector: 'app-klondike',
  templateUrl: './klondike.component.html',
  styleUrls: ['./klondike.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDropList,
    CdkDropListGroup,
    MatSlideToggleModule
  ]
})
export class KlondikeComponent<FaceCard extends Card<FaceCardStyle>> implements OnInit {
  private readonly alert = inject(AlertService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly zone = inject(NgZone);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public drawCount = 3;
  public gameSeed = '';
  public cheatMode = false;
  public cheatCoverMode = false;
  public cheatSelectedCard?: FaceCard;
  public deck!: FaceCards;
  public readonly history: GameHistory = { records: [] };
  public readonly draw: Draw<FaceCard> = new Draw();
  public readonly foundations: Foundation<FaceCard>[] = [
    new Foundation(), new Foundation(),
    new Foundation(), new Foundation()
  ];
  public readonly tableaus: Tableau<FaceCard>[] = [
    new Tableau(), new Tableau(), new Tableau(),
    new Tableau(), new Tableau(), new Tableau(), new Tableau()
  ];
  public readonly dragging: ICard[] = [];

  ngOnInit(): void {
    this.startGame(this.routeSeed());
  }

  public get gameSeedLabel(): string {
    const match = /^shuffle:(.*):(\d+)$/.exec(this.gameSeed);
    const seed = match?.[1] ?? this.gameSeed;
    return seed.length > 8 ? seed.slice(0, 8) : seed;
  }

  public get cheatStockCards(): FaceCard[] {
    return (this.deck?.cards.slice().reverse() ?? []) as FaceCard[];
  }

  private routeSeed = (): string | undefined =>
    this.route.snapshot.queryParamMap.get('seed') || undefined;

  public setSeedQueryParam = (): void => {
    if (!this.gameSeed) {
      return;
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { seed: this.gameSeed },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  public get cheatCoverCards(): FaceCard[] {
    const drawCard = this.draw.cards.slice(-1) as FaceCard[];
    const tableauCards = flatten(this.tableaus.map(pile => pile.cards)) as FaceCard[];
    return [...drawCard, ...tableauCards]
      .filter((card): card is FaceCard => this.canCheatCover(card));
  }

  public get canPalmCheatCard(): boolean {
    return !!this.cheatSelectedCard && !this.foundations.some(pile => pile.includes(this.cheatSelectedCard?.ids.deckId ?? ''));
  }

  public get canCoverCheatCard(): boolean {
    return !!this.cheatSelectedCard && this.cheatCoverCards.length > 0;
  }

  private canFoundationDrop = (card: FaceCard, pile: FaceCard[]): boolean => {
    if (!card || card !== card.getPile()?.cards.slice(-1)[0]) {
      return false;
    }
    const placeon = (pile || []).slice(-1)[0];
    if (!placeon) {
      return card.style.name === FaceCardName.Ace;
    }
    return card.style.suit === placeon.style.suit && card.style.name === placeon.style.name + 1;
  }

  private canTableauDrop = (card: FaceCard, pile: FaceCard[]): boolean => {
    if (!card) {
      return false;
    }
    const placeon = (pile || []).slice(-1)[0];
    if (!placeon) {
      return card.style.name === FaceCardName.King;
    }
    return card.style.color !== placeon.style.color && card.style.name === placeon.style.name - 1;
  }

  private moveCard = (card: FaceCard, to_pile: IPile): void => {
    if (!card || !to_pile) {
      return;
    }
    const from_pile = card.getPile();
    if (from_pile) {
      const ndx = from_pile.cards.indexOf(card);
      if (ndx < 0) {
        return;
      }
      const next = ndx > 0 ? from_pile.cards[ndx - 1] : undefined;
      const moving = from_pile.cards.slice(ndx);
      const history = moveHistory(from_pile, ...moving);
      if (next && !this.canMove(next)) {
        history.moves.push(cardRecord(from_pile, next));
        next.flip();
      }
      const cards = from_pile.move(to_pile, ndx);
      if (cards) {
        this.history.records.push(history);
      }
    }
    this.checkWin();
  }

  private checkWin = async (): Promise<void> => {
    const cards = flatten(this.foundations.map(x => x.cards));
    const winner = (cards || []).length === 52;
    if (!winner) {
      return;
    }
    const result = await this.alert.showDialog({
      title: 'You Won!',
      message: 'Winner, winner... chicken dinner!',
      opts: {
        buttons: [{ title: 'Ok' }, { title: 'New Game', action: 'new-game' }]
      }
    });
    if (result === 'new-game') {
      this.history.records.splice(0);
      this.startGame();
    }
  }

  public undo = () => {
    const record = this.history.records.pop();
    if (record?.undo) {
      record.undo();
      this.clearCheatSelection();
      return;
    }
    for (const move of (record?.moves || [])) {
      const piles: IPile[] = [this.deck, this.draw, ...this.tableaus, ...this.foundations];
      for (const pile of piles) {
        const card = pile.cards.find(x => x.ids.deckId === move.deckId);
        if (!card) {
          continue;
        }
        card.style.state = move.style.state;
        if (move.pile !== pile) {
          pile.move(move.pile, pile.cards.indexOf(card));
        }
      }
    }
  }

  private isConfirmYes = (result: string | undefined): boolean =>
    typeof result === 'string' && result.toLowerCase() === 'yes';

  private askRestart = async (seed?: string): Promise<void> => {
    const result = await this.alert.showDialog({
      title: 'Are you sure?',
      message: 'Are you sure you would like to start a new game?',
      opts: { buttons: [{ title: 'Yes', action: 'yes' }, { title: 'No', action: 'no' }] }
    });
    if (this.isConfirmYes(result)) {
      this.dealGame(seed);
    }
  }

  private requestGame = (seed?: string): void => {
    if (this.history.records.length) {
      this.askRestart(seed);
      return;
    }
    this.dealGame(seed);
  }

  private dealGame = (seed?: string): void => {
    this.deck = new FaceCards();
    this.history.records.splice(0);
    this.clearCheatSelection();
    for (const pile of [this.draw, ...this.tableaus, ...this.foundations]) {
      pile.cards.splice(0);
    }

    this.deck.shuffle(seed ? undefined : 3, seed);
    this.gameSeed = this.deck.shuffleSeed ?? '';
    const tlen = this.tableaus.length;
    for (let cnt = tlen; cnt > 0; cnt--) {
      for (let ndx = tlen - cnt; ndx < tlen; ndx++) {
        const tableau = this.tableaus[ndx];
        this.deck.move(tableau, 0, 1);
        if (ndx === tlen - cnt) {
          tableau.turn(-1);
        }
      }
    }
    this.cdr.detectChanges();
  }

  public startGame = (seed?: string): void => {
    this.requestGame(seed);
  }

  private placeCard = (card: FaceCard, pile: IPile, index?: number): void => {
    card.setPile(pile);
    if (typeof index !== 'number') {
      return;
    }
    const currentIndex = pile.cards.indexOf(card);
    if (currentIndex < 0) {
      return;
    }
    const safeIndex = Math.min(Math.max(index, 0), pile.cards.length - 1);
    pile.cards.splice(currentIndex, 1);
    pile.cards.splice(safeIndex, 0, card);
  }

  private canCheatCover = (card?: FaceCard): card is FaceCard => {
    if (!card || card === this.cheatSelectedCard || !this.canMove(card)) {
      return false;
    }
    const pile = card.getPile();
    const isTopDrawCard = pile === this.draw && pile.cards.slice(-1)[0] === card;
    const isTableauCard = this.tableaus.some(tableau => tableau === pile && tableau.cards.includes(card));
    return isTopDrawCard || isTableauCard;
  }

  private canCheatPeek = (card?: Card<FaceCardStyle>): boolean => {
    if (!card || this.canMove(card)) {
      return false;
    }
    const pile = card.getPile();
    return pile === this.deck || this.tableaus.some(tableau => tableau === pile);
  }

  private clearCheatSelection = (): void => {
    this.cheatSelectedCard = undefined;
    this.cheatCoverMode = false;
  }

  private swapCheatCards = (
    card: FaceCard,
    cardPile: IPile,
    cardIndex: number,
    cover: FaceCard,
    coverPile: IPile,
    coverIndex: number
  ): void => {
    if (cardPile === coverPile) {
      cardPile.cards[cardIndex] = cover;
      coverPile.cards[coverIndex] = card;
      return;
    }
    this.placeCard(card, coverPile, coverIndex);
    this.placeCard(cover, cardPile, cardIndex);
  }

  public replayGame = (): void => {
    const seed = this.gameSeed;
    if (!seed) {
      return;
    }
    this.requestGame(seed);
  }

  public setDrawCount = (count: 1 | 3): void => {
    this.drawCount = count;
  }

  public toggleCheatMode = (): void => {
    this.cheatMode = !this.cheatMode;
    this.clearCheatSelection();
  }

  public selectCheatStock = (card: Card<FaceCardStyle>): void => {
    if (!this.deck.includes(card.ids.deckId) || !this.canCheatPeek(card)) {
      return;
    }
    if (this.cheatSelectedCard === card) {
      this.clearCheatSelection();
      return;
    }
    this.cheatSelectedCard = card as FaceCard;
    this.cheatCoverMode = false;
  }

  public selectCheatCard = (card: FaceCard): void => {
    if (!this.canCheatPeek(card)) {
      return;
    }
    if (this.cheatSelectedCard === card) {
      this.clearCheatSelection();
      return;
    }
    this.cheatSelectedCard = card;
    this.cheatCoverMode = false;
  }

  public toggleCheatCoverMode = (): void => {
    if (!this.canCoverCheatCard) {
      return;
    }
    this.cheatCoverMode = !this.cheatCoverMode;
  }

  public cardImagePath = (card: Card<FaceCardStyle>): string =>
    this.isCheatPeek(card) ? card.style.images.front : card.imagePath;

  public isCheatPeek = (card?: ICard): boolean =>
    this.cheatMode && !!card && this.cheatSelectedCard === card;

  public isStockCheatPeek = (card: Card<FaceCardStyle>): boolean =>
    this.isCheatPeek(card) && card.getPile() === this.deck;

  public isCheatCoverTarget = (card: FaceCard): boolean =>
    this.cheatMode && this.cheatCoverMode && this.canCheatCover(card);

  public isCheatPeekTarget = (card: FaceCard): boolean =>
    this.cheatMode && this.canCheatPeek(card);

  public onDeckClick = (): void => {
    if (!this.cheatMode) {
      this.doDraw();
      return;
    }
    const card = this.deck.cards.slice(-1)[0] as FaceCard | undefined;
    if (card) {
      this.selectCheatStock(card);
    }
  }

  public onStockCardClick = (event: MouseEvent, card: Card<FaceCardStyle>): void => {
    if (!this.cheatMode) {
      return;
    }
    event.stopPropagation();
    this.selectCheatStock(card);
  }

  public onCardClick = (event: MouseEvent, card: FaceCard): void => {
    if (!this.cheatMode) {
      this.dblClick(card);
      return;
    }
    if (this.cheatCoverMode && this.canCheatCover(card)) {
      event.stopPropagation();
      this.cheatSwapWithCover(card);
      return;
    }
    if (this.canCheatPeek(card)) {
      event.stopPropagation();
      this.selectCheatCard(card);
    }
  }

  public cheatPalmSelected = (): void => {
    const card = this.cheatSelectedCard;
    const fromPile = card?.getPile();
    if (!card || !fromPile || !this.canPalmCheatCard) {
      return;
    }
    const fromIndex = fromPile.cards.indexOf(card);
    if (fromIndex < 0) {
      return;
    }
    const state = card.style.state;
    this.history.records.push({
      moves: [cardRecord(fromPile, card)],
      undo: () => {
        this.placeCard(card, fromPile, fromIndex);
        card.setState(state);
      }
    });
    this.placeCard(card, this.draw);
    card.setState(CardState.Up);
    this.clearCheatSelection();
  }

  public cheatSwapWithCover = (cover: FaceCard): void => {
    const card = this.cheatSelectedCard;
    const cardPile = card?.getPile();
    const coverPile = cover.getPile();
    if (!card || !cardPile || !coverPile || !this.canCheatCover(cover)) {
      return;
    }
    const cardIndex = cardPile.cards.indexOf(card);
    const coverIndex = coverPile.cards.indexOf(cover);
    if (cardIndex < 0 || coverIndex < 0) {
      return;
    }
    const cardState = card.style.state;
    const coverState = cover.style.state;
    this.history.records.push({
      moves: [cardRecord(cardPile, card), cardRecord(coverPile, cover)],
      undo: () => {
        this.placeCard(card, cardPile, cardIndex);
        card.setState(cardState);
        this.placeCard(cover, coverPile, coverIndex);
        cover.setState(coverState);
      }
    });
    this.swapCheatCards(card, cardPile, cardIndex, cover, coverPile, coverIndex);
    card.setState(CardState.Up);
    cover.setState(CardState.Down);
    this.clearCheatSelection();
  }

  public doDraw = () => {
    this.clearCheatSelection();
    let cards: ICard[];
    let history: HistoryData[];
    if (this.deck.cards.length) {
      cards = this.deck.move(this.draw, 0, this.drawCount);
      history = cards.map(x => cardRecord(this.deck, x));
    } else {
      cards = this.draw.move(this.deck, 0);
      history = cards.map(x => cardRecord(this.draw, x));
    }
    cards.forEach(x => x.flip());
    this.history.records.push({ moves: history.reverse() });
  }

  public canMove = (card: ICard): boolean => {
    return card?.style.state === CardState.Up;
  }

  public dblClick = (card: FaceCard) => {
    if (!this.canMove(card)) {
      return;
    }
    for (const pile of [...this.foundations, ...this.tableaus]) {
      let candrop: (card: FaceCard, pile: FaceCard[]) => boolean = () => false;
      if (pile instanceof Foundation) {
        candrop = this.canFoundationDrop;
      } else if (pile instanceof Tableau) {
        candrop = this.canTableauDrop;
      }
      if (candrop(card, pile.cards)) {
        return this.moveCard(card, pile);
      }
    }
  }

  public canSort = (index: number, drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const card = drag.data;
    const cards = drop.data;
    return !drop.data.includes(card) && index === cards.length;
  }

  public noDrop = (): boolean => {
    return false;
  }

  public foundationDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    return this.canFoundationDrop(drag.data, drop.data);
  }

  public tableauDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    return this.canTableauDrop(drag.data, drop.data);
  }

  public onDragStart = (event: CdkDragStart<FaceCard>) => {
    const card = event.source.data;
    const pile = card.getPile();
    if (pile) {
      const ndx = pile.cards.indexOf(card);
      const dragging = pile.cards.slice(ndx);
      if (dragging) {
        this.dragging.splice(0, this.dragging.length, ...dragging ?? []);
      }
    }
  }

  public onDrop = (event: CdkDragDrop<FaceCard[]>) => {
    if (event.previousContainer === event.container) {
      event.item.reset();
    } else {
      const pileattr = event.container.element.nativeElement.attributes;
      const pileid = pileattr.getNamedItem('pile')?.value;
      if (pileid) {
        const match = /^(?<type>foundations|tableaus)(?<ndx>\d+)$/.exec(pileid);
        const groups = match?.groups ?? {};
        if (groups) {
          const type = groups['type'] as DropPileType | undefined;
          const ndx = Number(groups['ndx']);
          const pile = type && Number.isInteger(ndx) ? this.findDropPile(type, ndx) : undefined;
          if (pile) {
            this.moveCard(event.item.data, pile);
          }
        }  
      }
    }
    this.dragging.splice(0);
  }

  private findDropPile(type: DropPileType, ndx: number): IPile | undefined {
    return type === 'foundations' ? this.foundations[ndx] : this.tableaus[ndx];
  }
}
