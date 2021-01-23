import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Hand<T extends ICard> extends Pile<'Hand', T> {
}
