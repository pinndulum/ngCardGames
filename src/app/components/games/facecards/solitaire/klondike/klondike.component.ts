import { CdkDrag, CdkDragDrop, CdkDragStart, CdkDropList } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { CardState } from 'src/app/enum';
import { FaceCardName } from 'src/app/enum/facecards';
import { FaceCardStyle, ICard } from 'src/app/interfaces';
import { Card } from 'src/app/models/card';
import { Draw, Foundation, Tableau } from 'src/app/models/piles';
import { FaceCards } from 'src/app/models/piles/decks';

@Component({
  selector: 'app-klondike',
  templateUrl: './klondike.component.html',
  styleUrls: ['./klondike.component.scss']
})
export class KlondikeComponent<FaceCard extends Card<FaceCardStyle>> {

  public deck: FaceCards;
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

  public startGame = (): void => {
    this.deck = new FaceCards();
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
    if (this.deck.cards.length) {
      this.deck.move(this.draw, 0, 3).forEach(x => x.flip());
    } else {
      this.draw.move(this.deck, 0).forEach(x => x.flip());
    }
  }

  public canMove = (card: ICard): boolean => {
    return card?.style.state === CardState.Up;
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
    const card = drag.data;
    const placeon = drop.data.slice(-1)[0];
    if (!placeon) {
      return card.style.name === FaceCardName.Ace;
    }
    return card.style.suit === placeon.style.suit && card.style.name === placeon.style.name + 1;
  }

  public tableauDrop = (drag: CdkDrag<FaceCard>, drop: CdkDropList<FaceCard[]>): boolean => {
    const card = drag.data;
    const placeon = drop.data.slice(-1)[0];
    if (!placeon) {
      return card.style.name === FaceCardName.King;
    }
    return card.style.color !== placeon.style.color && card.style.name === placeon.style.name - 1;
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
      const to_pile = this[match.groups.type][match.groups.ndx];

      const card: FaceCard = event.item.data;
      const from_pile = card.getPile();
      const ndx = from_pile.cards.indexOf(card);
      from_pile.move(to_pile, ndx);
      if (!this.canMove(from_pile.cards[from_pile.cards.length - 1])) {
        from_pile.turn(-1);
      }
    }
  }
}
