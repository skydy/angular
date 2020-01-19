/* 引入核心模块里面的Component */
import { Component, OnInit } from '@angular/core';
//引入并且配置服务
import { StorageService } from '../../services/storage.service'
// 不推荐
// var storage =new StorageService();
// console.log(storage)
// 请求服务
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

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

    constructor(
        public storage:StorageService,
        public http:HttpClient,
        public route:ActivatedRoute
        ){ 
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
        let streem = this.storage.getRxjsData()
        /* 发布订阅 */
        let d = streem.subscribe((data)=>{
            console.log(data)
        })
        /* 取消订阅 */
        setTimeout(()=>{
            d.unsubscribe();
        },1000)

        // get请求
        let api = 'http://a.itying.com/api/productlist'
        this.http.get(api).subscribe(res=>{
            console.log(res)
        },
        error=>{
            console.log(error)
        })
        // post请求
        const httpOptions = {header:new HttpHeaders({"Content-Type": "application/json"})}
        // let data={info:"info"}
        // this.http.post(api,data,httpOptions).subscribe((res)=>{
        //     console.log(res)
        // })
        // 获取路由传值
        this.route.queryParams.subscribe((data)=>{
            console.log('路由值为：',data);
        })
    }
}
