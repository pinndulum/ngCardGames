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
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, take } from 'rxjs';
import { DialogAction } from '../../../../../../../assets/dialog.message';
import { DialogTemplateComponent } from '../../../../../controls/dialog-template/dialog-template.component';
import { CardState } from '../../../../../../enum';
import { FaceCardName } from '../../../../../../enum/facecards';
import { FaceCardStyle, IPile } from '../../../../../../interfaces';
import { Card } from '../../../../../../models/card';
import { GameHistory, moveHistory } from '../../../../../../models/game.history';
import { FaceCards } from '../../../../../../models/piles/decks';
import { Foundation, Tableau } from '../../../../../../models/piles';

type DropPileType = 'cells' | 'foundations' | 'tableaus';

@Component({
  selector: 'app-freecell',
  templateUrl: './freecell.component.html',
  styleUrls: ['./freecell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDropList,
    CdkDropListGroup
  ]
})
export class FreeCellComponent<FaceCard extends Card<FaceCardStyle>> implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly zone = inject(NgZone);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public gameSeed = '';
  public deck!: FaceCards;
  public selectedCard?: FaceCard;
  public readonly history: GameHistory = { records: [] };
  public readonly cells: Foundation<FaceCard>[] = [
    new Foundation(), new Foundation(),
    new Foundation(), new Foundation()
  ];
  public readonly foundations: Foundation<FaceCard>[] = [
    new Foundation(), new Foundation(),
    new Foundation(), new Foundation()
  ];
  public readonly tableaus: Tableau<FaceCard>[] = [
    new Tableau(), new Tableau(), new Tableau(), new Tableau(),
    new Tableau(), new Tableau(), new Tableau(), new Tableau()
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

  public get openCellCount(): number {
    return this.cells.filter(pile => pile.cards.length === 0).length;
  }

  public get openTableauCount(): number {
    return this.tableaus.filter(pile => pile.cards.length === 0).length;
  }

  public get foundationCardCount(): number {
    return this.foundations.reduce((count, pile) => count + pile.cards.length, 0);
  }

  public get maxMoveCount(): number {
    return this.maxMovableCards();
  }

  public get selectedSequence(): FaceCard[] {
    return this.movableSequence(this.selectedCard);
  }

  public get canAutoMove(): boolean {
    return !!this.findAutoFoundationMove();
  }

  private topCard = (pile: IPile): FaceCard | undefined =>
    pile.cards.slice(-1)[0] as FaceCard | undefined;

  private allPiles = (): IPile[] =>
    [this.deck, ...this.cells, ...this.tableaus, ...this.foundations];

  private playPiles = (): IPile[] =>
    [...this.cells, ...this.tableaus, ...this.foundations];

  private isCellPile = (pile: IPile): boolean =>
    this.cells.includes(pile as Foundation<FaceCard>);

  private isFoundationPile = (pile: IPile): boolean =>
    this.foundations.includes(pile as Foundation<FaceCard>);

  private isTableauPile = (pile: IPile): boolean =>
    this.tableaus.includes(pile as Tableau<FaceCard>);

  private isTopCard = (card: FaceCard): boolean => {
    const pile = card.getPile();
    return !!pile && this.topCard(pile) === card;
  }

  private isBuiltDownSequence = (cards: FaceCard[]): boolean => {
    for (let ndx = 0; ndx < cards.length - 1; ndx++) {
      const current = cards[ndx];
      const next = cards[ndx + 1];
      if (current.style.color === next.style.color || current.style.name !== next.style.name + 1) {
        return false;
      }
    }
    return true;
  }

  private movableSequence = (card?: FaceCard): FaceCard[] => {
    if (!card || card.style.state !== CardState.Up) {
      return [];
    }
    const pile = card.getPile();
    if (!pile) {
      return [];
    }
    const ndx = pile.cards.indexOf(card);
    if (ndx < 0) {
      return [];
    }
    if (!this.isTableauPile(pile)) {
      return this.isTopCard(card) ? [card] : [];
    }
    const cards = pile.cards.slice(ndx) as FaceCard[];
    return this.isBuiltDownSequence(cards) ? cards : [];
  }

  private maxMovableCards = (destination?: IPile): number => {
    const openCells = this.openCellCount;
    let openTableaus = this.openTableauCount;
    if (destination && this.isTableauPile(destination) && destination.cards.length === 0) {
      openTableaus = Math.max(openTableaus - 1, 0);
    }
    return (openCells + 1) * Math.pow(2, openTableaus);
  }

  private canMoveSingle = (card: FaceCard): boolean =>
    card.style.state === CardState.Up && this.isTopCard(card);

  private canCellDrop = (card: FaceCard, pile: FaceCard[]): boolean =>
    pile.length === 0 && this.canMoveSingle(card);

  private canFoundationDrop = (card: FaceCard, pile: FaceCard[]): boolean => {
    if (!this.canMoveSingle(card)) {
      return false;
    }
    const placeon = pile.slice(-1)[0];
    if (!placeon) {
      return card.style.name === FaceCardName.Ace;
    }
    return card.style.suit === placeon.style.suit && card.style.name === placeon.style.name + 1;
  }

  private canTableauDropToPile = (card: FaceCard, pile: IPile): boolean => {
    const cards = this.movableSequence(card);
    if (cards.length < 1 || cards.length > this.maxMovableCards(pile)) {
      return false;
    }
    const placeon = this.topCard(pile);
    if (!placeon) {
      return true;
    }
    return card.style.color !== placeon.style.color && card.style.name === placeon.style.name - 1;
  }

  private canMoveToPile = (card: FaceCard, toPile: IPile): boolean => {
    const fromPile = card.getPile();
    if (!fromPile || fromPile === toPile) {
      return false;
    }
    if (this.isCellPile(toPile)) {
      return this.canCellDrop(card, toPile.cards as FaceCard[]);
    }
    if (this.isFoundationPile(toPile)) {
      return this.canFoundationDrop(card, toPile.cards as FaceCard[]);
    }
    if (this.isTableauPile(toPile)) {
      return this.canTableauDropToPile(card, toPile);
    }
    return false;
  }

  private findPileByCards = (cards: FaceCard[]): IPile | undefined =>
    this.playPiles().find(pile => pile.cards === cards);

  private findDropPile(type: DropPileType, ndx: number): IPile | undefined {
    if (type === 'cells') {
      return this.cells[ndx];
    }
    if (type === 'foundations') {
      return this.foundations[ndx];
    }
    return this.tableaus[ndx];
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
    const moving = fromPile.cards.slice(ndx) as FaceCard[];
    const history = moveHistory(fromPile, ...moving);
    fromPile.move(toPile, ndx);
    this.history.records.push(history);
    this.clearSelection();
    this.checkWin();
  }

  private checkWin = (): void => {
    if (this.foundationCardCount !== 52) {
      return;
    }
    const windlg = this.dialog.open<DialogTemplateComponent, unknown, DialogAction>(DialogTemplateComponent, {
      disableClose: true,
      data: {
        title: 'You Won!',
        message: 'All cards are home.',
        opts: {
          buttons: [{ title: 'Ok' }, {
            title: 'New Game', action: () => {
              this.history.records.splice(0);
              this.startGame();
            }
          }]
        }
      }
    });
    void lastValueFrom(windlg.afterClosed()).then(result => {
      if (typeof result === 'function') {
        result();
      }
    });
  }

  private isConfirmYes = (result: DialogAction | undefined): boolean =>
    typeof result === 'string' && result.toLowerCase() === 'yes';

  private askRestart = (seed?: string): void => {
    const askdlg = this.dialog.open<DialogTemplateComponent, unknown, DialogAction>(DialogTemplateComponent, {
      disableClose: true,
      data: {
        title: 'Are you sure?',
        message: 'Are you sure you would like to start a new game?',
        opts: { buttons: [{ title: 'Yes', action: 'yes' }, { title: 'No', action: 'no' }] }
      }
    });
    askdlg.afterClosed().pipe(take(1)).subscribe(result => {
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
    this.deck = new FaceCards();
    this.history.records.splice(0);
    this.clearSelection();
    for (const pile of this.playPiles()) {
      pile.cards.splice(0);
    }

    this.deck.shuffle(seed ? undefined : 3, seed);
    this.gameSeed = this.deck.shuffleSeed ?? '';
    let dealIndex = 0;
    while (this.deck.cards.length) {
      const tableau = this.tableaus[dealIndex % this.tableaus.length];
      this.deck.move(tableau, 0, 1);
      this.topCard(tableau)?.setState(CardState.Up);
      dealIndex++;
    }
    this.cdr.detectChanges();
  }

  private findFoundationForCard = (card?: FaceCard): Foundation<FaceCard> | undefined => {
    if (!card || this.isFoundationPile(card.getPile() as IPile) || !this.canMoveSingle(card)) {
      return undefined;
    }
    return this.foundations.find(pile => this.canFoundationDrop(card, pile.cards));
  }

  private findAutoFoundationMove = (): FaceCard | undefined => {
    if (this.selectedCard && this.findFoundationForCard(this.selectedCard)) {
      return this.selectedCard;
    }
    const candidates = [
      ...this.cells.map(pile => this.topCard(pile)),
      ...this.tableaus.map(pile => this.topCard(pile))
    ];
    return candidates.find((card): card is FaceCard => !!card && !!this.findFoundationForCard(card));
  }

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
    if (!record) {
      return;
    }
    if (record.undo) {
      record.undo();
      this.clearSelection();
      this.cdr.detectChanges();
      return;
    }
    for (const move of record.moves) {
      for (const pile of this.allPiles()) {
        const card = pile.cards.find(x => x.ids.deckId === move.deckId);
        if (!card) {
          continue;
        }
        card.style.state = move.style.state;
        if (move.pile !== pile) {
          pile.move(move.pile, pile.cards.indexOf(card));
        }
        break;
      }
    }
    this.clearSelection();
    this.cdr.detectChanges();
  }

  public clearSelection = (): void => {
    this.selectedCard = undefined;
    this.dragging.splice(0);
  }

  public selectCard = (card: FaceCard): void => {
    if (this.selectedCard === card) {
      this.clearSelection();
      return;
    }
    this.selectedCard = this.canDrag(card) ? card : undefined;
  }

  public canDrag = (card: FaceCard): boolean =>
    this.movableSequence(card).length > 0;

  public isCardSelected = (card: FaceCard): boolean =>
    this.selectedCard === card;

  public isInSelectedSequence = (card: FaceCard): boolean =>
    this.selectedSequence.includes(card);

  public isPileTarget = (pile: IPile): boolean =>
    !!this.selectedCard && this.canMoveToPile(this.selectedCard, pile);

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

  public autoMove = (): void => {
    const card = this.findAutoFoundationMove();
    const foundation = this.findFoundationForCard(card);
    if (!card || !foundation) {
      return;
    }
    this.moveCard(card, foundation);
  }

  public dblClick = (card: FaceCard): void => {
    const foundation = this.findFoundationForCard(card);
    if (foundation) {
      this.moveCard(card, foundation);
    }
  }

  public canSort = (index: number, drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const card = drag.data;
    return !drop.data.includes(card) && index === drop.data.length;
  }

  public freeCellDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const pile = this.findPileByCards(drop.data);
    return !!pile && this.isCellPile(pile) && this.canMoveToPile(drag.data, pile);
  }

  public foundationDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const pile = this.findPileByCards(drop.data);
    return !!pile && this.isFoundationPile(pile) && this.canMoveToPile(drag.data, pile);
  }

  public tableauDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const pile = this.findPileByCards(drop.data);
    return !!pile && this.isTableauPile(pile) && this.canMoveToPile(drag.data, pile);
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
    const match = /^(?<type>cells|foundations|tableaus)(?<ndx>\d+)$/.exec(pileid ?? '');
    const groups = match?.groups;
    const type = groups?.['type'] as DropPileType | undefined;
    const ndx = Number(groups?.['ndx']);
    const pile = type && Number.isInteger(ndx) ? this.findDropPile(type, ndx) : undefined;
    if (pile && this.canMoveToPile(event.item.data, pile)) {
      this.moveCard(event.item.data, pile);
    } else {
      event.item.reset();
    }
    this.dragging.splice(0);
  }
}
