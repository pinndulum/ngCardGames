import { CdkDrag, CdkDragDrop, CdkDragStart, CdkDropList } from '@angular/cdk/drag-drop';
import { flatten } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { switchMap } from 'rxjs/operators';
import { ModalDialogComponent } from 'src/app/components/modal-dialog/modal-dialog.component';
import { CardState } from 'src/app/enum';
import { FaceCardName } from 'src/app/enum/facecards';
import { FaceCardStyle, ICard, IPile } from 'src/app/interfaces';
import { Card } from 'src/app/models/card';
import { cardRecord, GameHistory, HistoryData, moveHistory } from 'src/app/models/game.history';
import { Draw, Foundation, Tableau } from 'src/app/models/piles';
import { FaceCards } from 'src/app/models/piles/decks';

@Component({
  selector: 'app-klondike',
  templateUrl: './klondike.component.html',
  styleUrls: ['./klondike.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KlondikeComponent<FaceCard extends Card<FaceCardStyle>> implements OnInit {

  public drawCount = 3;
  public deck: FaceCards;
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

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.startGame();
  }

  private canFoundationDrop = (card: FaceCard, pile: FaceCard[]): boolean => {
    if (!card || card !== card.getPile().cards.slice(-1)[0]) {
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
    const ndx = from_pile.cards.indexOf(card);
    const cards = from_pile.move(to_pile, ndx);
    const history = moveHistory(from_pile, ...cards);
    const next = from_pile.cards.slice(-1)[0];
    if (next && !this.canMove(next)) {
      history.moves.push(cardRecord(from_pile, next));
      next.flip();
    }
    this.history.records.push(history);
    this.checkWin();
  }

  private checkWin = () => {
    const cards = flatten(this.foundations.map(x => x.cards));
    const winner = (cards || []).length === 52;
    if (!winner) {
      return;
    }
    const windlg = this.dialog.open(ModalDialogComponent, {
      disableClose: true,
      data: {
        title: 'You Won!',
        message: 'Winner, winner... chicken dinner!',
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
    windlg.afterClosed().pipe(
      switchMap((diagres: string | (() => {})) => {
        const result = typeof diagres === 'function' ? diagres() : diagres;
        return Promise.resolve(result);
      })
    ).toPromise();
  }

  public undo = () => {
    const record = this.history.records.pop();
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

  public startGame = async (): Promise<void> => {
    if (this.history.records.length) {
      const askdlg = this.dialog.open(ModalDialogComponent, {
        disableClose: true,
        data: {
          title: 'Are you sure?',
          message: 'Are you sure you would like to start a new game?',
          opts: { buttons: [{ title: 'Yes' }, { title: 'No' }] }
        }
      });
      const result: string = await askdlg.afterClosed().toPromise();
      if (result === 'No') {
        return;
      }
    }

    this.deck = new FaceCards();
    this.history.records.splice(0);
    for (const pile of [this.draw, ...this.tableaus, ...this.foundations]) {
      pile.cards.splice(0);
    }

    this.deck.shuffle(3);
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
  }

  public doDraw = () => {
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
      let candrop: (card: ICard, pile: ICard[]) => boolean;
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
    const ndx = pile.cards.indexOf(card);
    const dragging = pile.cards.slice(ndx);
    this.dragging.splice(0, this.dragging.length, ...dragging);
  }

  public onDrop = (event: CdkDragDrop<FaceCard[]>) => {
    this.dragging.splice(0);
    if (event.previousContainer === event.container) {
      event.item.reset();
    } else {
      const pileid: string = event.container.element.nativeElement.attributes['pile'].value;
      const match = /(?<type>.+)(?<ndx>\d+)/.exec(pileid);
      const pile: IPile = this[match.groups.type][match.groups.ndx];
      if (pile) {
        this.moveCard(event.item.data, pile);
      }
    }
  }
}
