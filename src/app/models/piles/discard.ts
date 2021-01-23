import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Discard<T extends ICard> extends Pile<'Discard', T> {
}
