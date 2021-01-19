import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { NewsDetailService } from './../news-detail.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsDetailData = null;
  newsUrl = null;
  // 展示新闻详情数据
  showNewsDetailData(): void {
    this.route.queryParams.subscribe(p => this.newsUrl = p.newsUrl); // 获取路由参数

    this.newsDetailService.getNewsData(this.newsUrl).subscribe(
      (newsApiData) => this.newsDetailData = this.domSanitizer.bypassSecurityTrustHtml(newsApiData.toString()) // HTML过滤
    );
  }
  /**
   * 返回
   */
  goback(): void {
    this.location.back();
  }

  constructor(
    private newsDetailService: NewsDetailService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.showNewsDetailData();
  }

}
