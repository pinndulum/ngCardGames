import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Draw<T extends ICard> extends Pile<'Draw', T> {
}
