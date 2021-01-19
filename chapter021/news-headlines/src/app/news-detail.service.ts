import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  getNewsData(newsApiUrl: string){
    return this.http.get(
      newsApiUrl,
      {responseType: 'text'} // 处理HTML类型
    );
  }

  /**
   *  注入HttpClient
   * @param http http服务
   */
  constructor(private http: HttpClient) { }
}
