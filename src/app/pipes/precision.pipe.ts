import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'precision' })
export class PrecisionPipe implements PipeTransform {
    transform (value: number | string | undefined, precision?: number): string | undefined {
        value = Number(value);
        if (isNaN(value)) {
            return;
        }
        return value.toPrecision(precision);
    }
}
