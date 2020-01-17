import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入表单相关模块，才能使用双向数据绑定
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
// 引入管道文件
import { SharedModule } from "./pipe/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
