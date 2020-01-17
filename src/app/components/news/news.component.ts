import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
    public title:string = "这是新闻msg";
    public arr:number[] = [111,222,333];
    public binding:string = "";
    public imgs:any[] = [
        require("../../../assets/img/1.jpg"),
        require("../../../assets/img/2.jpg"),
        require("../../../assets/img/3.jpg"),
        require("../../../assets/img/4.jpg"),
        require("../../../assets/img/5.jpg"),
        require("../../../assets/img/6.jpg")
    ];
    constructor() { 
        this.title = "这个是修改后的msg";
    }
    btn(e){
        alert(e)
    }
    ac(){
        this.binding = "996"
    }
    ngOnInit() {
        
    }
}
