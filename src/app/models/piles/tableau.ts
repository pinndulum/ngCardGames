import { DrawFrom } from '../../enum';
import { ICard } from '../../interfaces';
import { Pile } from './pile';

export class Tableau<T extends ICard> extends Pile<'Tableau', T> {
    constructor() {
        super([], DrawFrom.Bottom);
    }
}
