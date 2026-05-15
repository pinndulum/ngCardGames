import { ICard } from '../../interfaces';
import { Pile } from './pile';

export class Discard<T extends ICard> extends Pile<'Discard', T> {
}
