/* 引入核心模块里面的Component */
import { Component, OnInit } from '@angular/core';
//引入并且配置服务
import { StorageService } from '../../services/storage.service'
// 不推荐
// var storage =new StorageService();
// console.log(storage)

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
    public title:string = "这是新闻msg";
    public arr:number[] = [111,222,333];
    public binding:string = "";
    public base:string;
    public imgs:any[] = [
        require("../../../assets/img/1.jpg"),
        require("../../../assets/img/2.jpg"),
        require("../../../assets/img/3.jpg"),
        require("../../../assets/img/4.jpg"),
        require("../../../assets/img/5.jpg"),
        require("../../../assets/img/6.jpg")
    ];
    constructor(public storage:StorageService) { 
        this.title = "这个是修改后的msg";
    }
    btn(e:number){
        alert(e)
    }
    ac(){
        this.binding = "996"
    }
    bas(){
        this.storage.set("base",this.base)
        console.log('this.storage.get("base")',this.storage.get("base"))
    }
    ngOnInit() {
        
    }
}
