import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'homes' })
export class Homes implements PipeTransform {
    transform(value: string): string {
        if (value == '888') {
            return "牛逼"
        } else {
            return value
        }
    }
}