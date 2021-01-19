import { Component, OnInit } from '@angular/core';
import { NewsMsg } from '../news';

import { NewsService } from './../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  /**
   * 绑定模型用的变量
   */
  news = [];

  /**
   * 调用接口获取新闻信息列表
   */
  showNewsData(): void {
    this.newsService.getNewsData().subscribe(
      (newsApiData: NewsMsg) => this.news = newsApiData.result.data
    );
  }
  /**
   * 接收选中的tab事件
   * @param alias 选中的tab别名
   */
  tabSelected(alias: string): void {
    this.newsService.setAlias(alias);
  }

  /**
   * 注入NewsService服务
   * @param newsService 获取新闻列表的接口
   */
  constructor(private newsService: NewsService) { }

  /**
   * 初始化时就要获取数据
   */
  ngOnInit(): void {
    this.showNewsData();

    // 监听新闻分类切换的事件
    this.newsService.tabSelected.subscribe(
      alias => {
        this.tabSelected(alias);
        this.showNewsData();
      }
    );
  }

}
