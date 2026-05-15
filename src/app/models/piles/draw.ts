import { DrawFrom } from '../../enum';
import { ICard } from '../../interfaces';
import { Pile } from './pile';

export class Draw<T extends ICard> extends Pile<'Draw', T> {
    constructor() {
        super([], DrawFrom.Bottom);
    }
}
