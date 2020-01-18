import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    //获取dom节点
    @ViewChild('myBox',{static:true}) myBox:any;
    @ViewChild('header',{static:true}) header:any;

    public title:string="这是home给的title"
    constructor() { }

    ngOnInit() {
    }

    homeBtn(){
        // 调用子组件app-header里面的run方法
        this.header.run()
    }

    // 视图加载完成以后出发的方法       dom加载完成(建议把dom操作放在这个里面)
    ngAfterViewInit():void{
        console.log(this.myBox)
        this.myBox.nativeElement.style.color = "green"
    }

    run(){
        alert("这个是home组件里面的run方法")
    }
    
}