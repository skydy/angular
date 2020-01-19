import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component'; */

const routes: Routes = [
    /* 路由引入 */
    /* { path: 'NewsComponent', component: NewsComponent },
    { path: 'HomeComponent', component: HomeComponent },
    {
        path: '',
        redirectTo: 'NewsComponent',
        pathMatch: 'full'
    } */
    /* 路由重定向 */
    // {
    //     path: '**',
    //     redirectTo: 'NewsComponent'
    // },
    
    /* 路由懒加载 */
    { path: 'mall', loadChildren: './module/mall/mall.module#MallModule' },
    { path: 'product', loadChildren: './module/product/product.module#ProductModule' },
    { path:'**',redirectTo:'mall'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
