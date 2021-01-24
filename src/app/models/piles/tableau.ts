import { DrawFrom } from 'src/app/enum';
import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Tableau<T extends ICard> extends Pile<'Tableau', T> {
    constructor() {
        super([], DrawFrom.Bottom);
    }
}
