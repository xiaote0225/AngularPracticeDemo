import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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
  key = '&key=c8e67bcabe16ec3abbf58e026d1a1a48';
  // key = '&key=d95eb2c02b12e841bafb5a49d20924be';

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
