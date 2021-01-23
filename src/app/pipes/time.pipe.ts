import { Pipe, PipeTransform } from '@angular/core';
import { ITime, Time } from 'src/app/models/time';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
    transform(value: string | ITime, format?: string) {
        const time = new Time(value);
        return time.toString(format);
    }
}
