/* 这个文件是angular根模块，告诉angular如何组装应用 */

// BrowserModule,浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// angular核心模块
import { NgModule } from '@angular/core';
//引入表单相关模块，才能使用双向数据绑定
import { FormsModule } from '@angular/forms';
// 组件引入
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
// 引入管道文件
import { SharedModule } from "./pipe/shared.module";
//引入并且配置服务
import { StorageService } from './services/storage.service';
import { HeaderComponent } from './components/header/header.component';
// 数据请求依赖模块
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    // 配置当前项目运行的组件
    declarations: [
        AppComponent,
        NewsComponent,
        HomeComponent,
        HeaderComponent
    ],
    // 配置当前模块运行依赖的其他模块
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        AppRoutingModule
    ],
    // 配置项目所需要的服务
    providers: [
        StorageService,
        {provide: HashLocationStrategy, useClass: HashLocationStrategy}
        // {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    // 指定应用的主视图(称为根组件)通过引导根AppModule来启动应用，这里一般写的是根组件
    bootstrap: [AppComponent]
})
// 根模块不需要导出任何东西,因为其他组件不需要导入根模块
export class AppModule { }
