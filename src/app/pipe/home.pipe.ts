import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'homes' })
export class Homes implements PipeTransform {
    transform(value): string {
        if(value=='888'){
            return "牛逼"
        }else{
            return value
        }
    }
}