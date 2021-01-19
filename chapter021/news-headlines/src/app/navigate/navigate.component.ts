import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../category.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  /**
   * 绑定模型用的变量
   */
  categories = [];

  /**
   * 展示新闻分类数据
   */
  showCategoryData(): void {
    this.categories = this.categoryService.getCategoryData();
  }

  /**
   * 注入CategoryService服务
   * @param categoryService 该服务主要是获取分类数据
   */
  constructor(private categoryService: CategoryService) { }

  /**
   * 组件初始化时就要获取新闻分类数据
   */
  ngOnInit(): void {
    this.showCategoryData();
  }
}
