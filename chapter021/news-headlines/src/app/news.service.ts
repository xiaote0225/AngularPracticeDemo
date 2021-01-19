import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewsMsg } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  /**
   * 新闻列表API地址
   */
  newsApiUrl = 'http://v.juhe.cn/toutiao/index?type=';
  alias = 'top'; // 默认值top,获取全部的新闻列表数据
  // key = '&key=c8e67bcabe16ec3abbf58e026d1a1a48';
  key = '&key=d95eb2c02b12e841bafb5a49d20924be';
  /**
   * 通过事件方式来实现组件间通信
   */
  tabSelected = new EventEmitter<string>();
  /**
   * 设置新闻分类，用于刷新新闻数据
   * @param alias 新闻分类别名
   */
  setAlias(alias: string): void{
    this.alias = alias;
  }

  /**
   * 指定参数，类型为NewsMsg
   */
  getNewsData(): Observable<NewsMsg> {
    return this.http.get<NewsMsg>(this.newsApiUrl + this.alias + this.key);
  }


  /**
   * 组件类的构造函数
   * @param http 注入HttpClient服务
   */
  constructor(private http: HttpClient) { }
}
