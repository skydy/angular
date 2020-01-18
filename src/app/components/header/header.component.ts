import { Component, OnInit ,Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    //接收父组件传来的数据
    @Input() title:any;
    @Input() runHome:any;

    constructor() { }

    ngOnInit() {
    }

    run(){
        console.log("我是header组件里面的run方法")
    }

    //获取父组件数据
    getParentMsg(){
        alert("home组件的信息---"+this.title)
    }

    // 获取父组件的方法
    getParentRun(){
       this.runHome() 
    }
}
