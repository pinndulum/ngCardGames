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
import { ActivatedRoute, Router } from '@angular/router';
import { CardState } from '../../../../../../enum';
import { FaceCardName } from '../../../../../../enum/facecards';
import { FaceCardStyle, IPile } from '../../../../../../interfaces';
import { Card } from '../../../../../../models/card';
import { GameHistory, MoveHistory } from '../../../../../../models/game.history';
import { Foundation, Tableau } from '../../../../../../models/piles';
import { FaceCards } from '../../../../../../models/piles/decks';
import { AlertService } from '../../../../../../services/alert.service';

type SpiderSnapshot<FaceCard extends Card<FaceCardStyle>> = {
  pile: IPile;
  cards: { card: FaceCard; state: CardState }[];
}[];

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDropList,
    CdkDropListGroup
  ]
})
export class SpiderComponent<FaceCard extends Card<FaceCardStyle>> implements OnInit {
  private readonly alert = inject(AlertService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly zone = inject(NgZone);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public gameSeed = '';
  public deck!: FaceCards;
  public selectedCard?: FaceCard;
  public readonly history: GameHistory = { records: [] };
  public readonly foundations: Foundation<FaceCard>[] = [
    new Foundation(), new Foundation(), new Foundation(), new Foundation(),
    new Foundation(), new Foundation(), new Foundation(), new Foundation()
  ];
  public readonly tableaus: Tableau<FaceCard>[] = [
    new Tableau(), new Tableau(), new Tableau(), new Tableau(), new Tableau(),
    new Tableau(), new Tableau(), new Tableau(), new Tableau(), new Tableau()
  ];
  public readonly dragging: FaceCard[] = [];

  ngOnInit(): void {
    this.startGame(this.routeSeed());
  }

  public get gameSeedLabel(): string {
    const match = /^shuffle:(.*):(\d+)$/.exec(this.gameSeed);
    const seed = match?.[1] ?? this.gameSeed;
    return seed.length > 6 ? seed.slice(0, 6) : seed;
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

  public get stockDealsRemaining(): number {
    return Math.floor((this.deck?.cards.length ?? 0) / this.tableaus.length);
  }

  public get completedRuns(): number {
    return this.foundations.filter(pile => pile.cards.length > 0).length;
  }

  public get openTableauCount(): number {
    return this.tableaus.filter(pile => pile.cards.length === 0).length;
  }

  public get canDeal(): boolean {
    return !!this.deck?.cards.length && this.openTableauCount === 0;
  }

  public get selectedSequence(): FaceCard[] {
    return this.movableSequence(this.selectedCard);
  }

  private topCard = (pile: IPile): FaceCard | undefined =>
    pile.cards.slice(-1)[0] as FaceCard | undefined;

  private allPiles = (): IPile[] =>
    [this.deck, ...this.tableaus, ...this.foundations];

  private isTableauPile = (pile?: IPile): pile is Tableau<FaceCard> =>
    !!pile && this.tableaus.includes(pile as Tableau<FaceCard>);

  private createSpiderDeck = (): FaceCards => {
    const deck = new FaceCards();
    const secondDeck = new FaceCards();
    secondDeck.cards.forEach(card => card.ids.deckId += 52);
    while (secondDeck.cards.length) {
      secondDeck.move(deck, 0, 1);
    }
    return deck;
  }

  private snapshotGame = (): SpiderSnapshot<FaceCard> =>
    this.allPiles().map(pile => ({
      pile,
      cards: pile.cards.map(card => ({ card: card as FaceCard, state: card.style.state }))
    }));

  private restoreSnapshot = (snapshot: SpiderSnapshot<FaceCard>): void => {
    this.allPiles().forEach(pile => pile.cards.splice(0));
    snapshot.forEach(record => {
      record.cards.forEach(entry => {
        entry.card.style.state = entry.state;
        entry.card.setPile(record.pile);
      });
    });
    this.clearSelection();
    this.cdr.detectChanges();
  }

  private historyRecord = (snapshot: SpiderSnapshot<FaceCard>): MoveHistory => ({
    moves: [],
    undo: () => this.restoreSnapshot(snapshot)
  });

  private isSameSuitRun = (cards: FaceCard[]): boolean => {
    if (cards.length < 1 || cards.some(card => card.style.state !== CardState.Up)) {
      return false;
    }
    for (let ndx = 0; ndx < cards.length - 1; ndx++) {
      const current = cards[ndx];
      const next = cards[ndx + 1];
      if (current.style.suit !== next.style.suit || current.style.name !== next.style.name + 1) {
        return false;
      }
    }
    return true;
  }

  private isCompleteRun = (cards: FaceCard[]): boolean =>
    cards.length === 13
    && cards[0].style.name === FaceCardName.King
    && cards[12].style.name === FaceCardName.Ace
    && this.isSameSuitRun(cards);

  private movableSequence = (card?: FaceCard): FaceCard[] => {
    if (!card || card.style.state !== CardState.Up) {
      return [];
    }
    const pile = card.getPile();
    if (!this.isTableauPile(pile)) {
      return [];
    }
    const ndx = pile.cards.indexOf(card);
    if (ndx < 0) {
      return [];
    }
    const cards = pile.cards.slice(ndx) as FaceCard[];
    return this.isSameSuitRun(cards) ? cards : [];
  }

  private canMoveToPile = (card: FaceCard, toPile: IPile): boolean => {
    const fromPile = card.getPile();
    const moving = this.movableSequence(card);
    if (!fromPile || fromPile === toPile || !this.isTableauPile(toPile) || moving.length < 1) {
      return false;
    }
    const placeon = this.topCard(toPile);
    return !placeon || card.style.name === placeon.style.name - 1;
  }

  private flipExposedCard = (pile: IPile): void => {
    const card = this.topCard(pile);
    if (card?.style.state === CardState.Down) {
      card.flip();
    }
  }

  private completeRuns = (): boolean => {
    let moved = false;
    let didMove = true;
    while (didMove) {
      didMove = false;
      for (const tableau of this.tableaus) {
        const runStart = tableau.cards.length - 13;
        if (runStart < 0) {
          continue;
        }
        const run = tableau.cards.slice(runStart) as FaceCard[];
        const foundation = this.foundations.find(pile => pile.cards.length === 0);
        if (!foundation || !this.isCompleteRun(run)) {
          continue;
        }
        tableau.move(foundation, runStart);
        this.flipExposedCard(tableau);
        moved = true;
        didMove = true;
      }
    }
    return moved;
  }

  private checkWin = async (): Promise<void> => {
    if (this.completedRuns !== 8) {
      return;
    }
    const result = await this.alert.showDialog({
      title: 'You Won!',
      message: 'All eight runs are complete.',
      opts: {
        buttons: [{ title: 'Ok' }, { title: 'New Game', action: 'new-game' }]
      }
    });
    if (result === 'new-game') {
      this.history.records.splice(0);
      this.startGame();
    }
  }

  private isConfirmYes = (result: string | undefined): boolean =>
    typeof result === 'string' && result.toLowerCase() === 'yes';

  private askRestart = (seed?: string): void => {
    void this.alert.showDialog({
      title: 'Are you sure?',
      message: 'Are you sure you would like to start a new game?',
      opts: { buttons: [{ title: 'Yes', action: 'yes' }, { title: 'No', action: 'no' }] }
    }).then(result => {
      if (!this.isConfirmYes(result)) {
        return;
      }
      this.zone.run(() => this.dealGame(seed));
    });
  }

  private requestGame = (seed?: string): void => {
    if (this.history.records.length) {
      this.askRestart(seed);
      return;
    }
    this.dealGame(seed);
  }

  private dealGame = (seed?: string): void => {
    this.deck = this.createSpiderDeck();
    this.history.records.splice(0);
    this.clearSelection();
    for (const pile of [...this.tableaus, ...this.foundations]) {
      pile.cards.splice(0);
    }

    this.deck.shuffle(seed ? undefined : 3, seed);
    this.gameSeed = this.deck.shuffleSeed ?? '';
    for (let round = 0; round < 5; round++) {
      this.tableaus.forEach(tableau => this.deck.move(tableau, 0, 1));
    }
    this.tableaus.slice(0, 4).forEach(tableau => this.deck.move(tableau, 0, 1));
    this.tableaus.forEach(tableau => this.flipExposedCard(tableau));
    this.cdr.detectChanges();
  }

  private moveCard = (card: FaceCard, toPile: IPile): void => {
    if (!this.canMoveToPile(card, toPile)) {
      return;
    }
    const fromPile = card.getPile();
    if (!fromPile) {
      return;
    }
    const ndx = fromPile.cards.indexOf(card);
    if (ndx < 0) {
      return;
    }
    const snapshot = this.snapshotGame();
    fromPile.move(toPile, ndx);
    this.flipExposedCard(fromPile);
    this.completeRuns();
    this.history.records.push(this.historyRecord(snapshot));
    this.clearSelection();
    this.checkWin();
  }

  private findPileByCards = (cards: FaceCard[]): IPile | undefined =>
    this.tableaus.find(pile => pile.cards === cards);

  private findDropPile = (ndx: number): IPile | undefined =>
    this.tableaus[ndx];

  public startGame = (seed?: string): void => {
    this.requestGame(seed);
  }

  public replayGame = (): void => {
    const seed = this.gameSeed;
    if (!seed) {
      return;
    }
    this.requestGame(seed);
  }

  public undo = (): void => {
    const record = this.history.records.pop();
    if (!record?.undo) {
      return;
    }
    record.undo();
  }

  public clearSelection = (): void => {
    this.selectedCard = undefined;
    this.dragging.splice(0);
  }

  public canDrag = (card: FaceCard): boolean =>
    this.movableSequence(card).length > 0;

  public isCardSelected = (card: FaceCard): boolean =>
    this.selectedCard === card;

  public isInSelectedSequence = (card: FaceCard): boolean =>
    this.selectedSequence.includes(card);

  public isPileTarget = (pile: IPile): boolean =>
    !!this.selectedCard && this.canMoveToPile(this.selectedCard, pile);

  public selectCard = (card: FaceCard): void => {
    if (this.selectedCard === card) {
      this.clearSelection();
      return;
    }
    this.selectedCard = this.canDrag(card) ? card : undefined;
  }

  public onCardClick = (event: MouseEvent, card: FaceCard): void => {
    event.stopPropagation();
    if (this.selectedCard && this.selectedCard !== card) {
      const pile = card.getPile();
      if (pile && this.topCard(pile) === card && this.canMoveToPile(this.selectedCard, pile)) {
        this.moveCard(this.selectedCard, pile);
        return;
      }
    }
    this.selectCard(card);
  }

  public onPileClick = (event: MouseEvent, pile: IPile): void => {
    event.stopPropagation();
    if (this.selectedCard && this.canMoveToPile(this.selectedCard, pile)) {
      this.moveCard(this.selectedCard, pile);
      return;
    }
    if (pile.cards.length === 0) {
      this.clearSelection();
    }
  }

  public dealStock = (): void => {
    if (!this.canDeal) {
      return;
    }
    const snapshot = this.snapshotGame();
    this.tableaus.forEach(tableau => {
      this.deck.move(tableau, 0, 1);
      this.topCard(tableau)?.setState(CardState.Up);
    });
    this.completeRuns();
    this.history.records.push(this.historyRecord(snapshot));
    this.clearSelection();
    this.checkWin();
  }

  public canSort = (index: number, drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const card = drag.data;
    return !drop.data.includes(card) && index === drop.data.length;
  }

  public tableauDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const pile = this.findPileByCards(drop.data);
    return !!pile && this.canMoveToPile(drag.data, pile);
  }

  public onDragStart = (event: CdkDragStart<FaceCard>): void => {
    const card = event.source.data;
    const dragging = this.movableSequence(card);
    this.selectedCard = card;
    this.dragging.splice(0, this.dragging.length, ...dragging);
  }

  public onDrop = (event: CdkDragDrop<FaceCard[]>): void => {
    if (event.previousContainer === event.container) {
      event.item.reset();
      this.dragging.splice(0);
      return;
    }
    const pileid = event.container.element.nativeElement.attributes.getNamedItem('pile')?.value;
    const match = /^tableaus(?<ndx>\d+)$/.exec(pileid ?? '');
    const ndx = Number(match?.groups?.['ndx']);
    const pile = Number.isInteger(ndx) ? this.findDropPile(ndx) : undefined;
    if (pile && this.canMoveToPile(event.item.data, pile)) {
      this.moveCard(event.item.data, pile);
    } else {
      event.item.reset();
    }
    this.dragging.splice(0);
  }
}
