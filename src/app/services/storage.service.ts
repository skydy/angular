import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }

    set(key:string,value:string){
        localStorage.setItem(key,JSON.stringify(value))
    }

    get(key:string){
        return JSON.parse(localStorage.getItem(key))
    }

    remove(key:string){
        localStorage.removeItem(key)
    }

    getRxjsData(){
        return new Observable((observer)=>{
            setTimeout(()=>{
                let user = "你好世界-Observable"
                observer.next(user)
                // observer.error('失败')
            },2000)
        })
    }
    
}
