import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', component: IndexComponent }, // 首页
  { path: 'news', component: NewsDetailComponent } // 新闻详情页面
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // 导入路由配置
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
