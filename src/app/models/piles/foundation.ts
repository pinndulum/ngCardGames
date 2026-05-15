import { DrawFrom } from '../../enum';
import { ICard } from '../../interfaces';
import { Pile } from './pile';

export class Foundation<T extends ICard> extends Pile<'Foundation', T> {
    constructor() {
        super([], DrawFrom.Bottom);
    }
}
