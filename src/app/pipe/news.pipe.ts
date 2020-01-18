import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'portrait' })
export class Portrait implements PipeTransform {
    transform(value: string): string {
        if (value == '666') {
            return "牛逼"
        } else {
            return value
        }
    }
}