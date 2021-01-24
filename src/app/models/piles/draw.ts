import { DrawFrom } from 'src/app/enum';
import { ICard } from 'src/app/interfaces';
import { Pile } from './pile';

export class Draw<T extends ICard> extends Pile<'Draw', T> {
    constructor() {
        super([], DrawFrom.Bottom);
    }
}
