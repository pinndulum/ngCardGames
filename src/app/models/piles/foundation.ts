import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Foundation<T extends ICard> extends Pile<'Foundation', T> {
}
