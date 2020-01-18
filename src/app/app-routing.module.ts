import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    
    
    { path: 'NewsComponent', component: NewsComponent },
    { path: 'HomeComponent', component: HomeComponent },
    {
        path: '',
        redirectTo: 'NewsComponent',
        pathMatch: 'full'
    }
    /* 路由重定向 */
    // {
    //     path: '**',
    //     redirectTo: 'NewsComponent'
    // },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
