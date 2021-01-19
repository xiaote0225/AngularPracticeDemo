import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // 新闻分类
  categories: Category[] = [
    { alias: 'top', name: '首页' },
    { alias: 'shehui', name: '社会' },
    { alias: 'guonei', name: '国内' },
    { alias: 'guoji', name: '国际' },
    { alias: 'yule', name: '娱乐' },
    { alias: 'tiyu', name: '体育' },
    { alias: 'junshi', name: '军事' },
    { alias: 'keji', name: '科技' },
    { alias: 'caijing', name: '财经' },
    { alias: 'shishang', name: '时尚' }
  ];

  // 获取新闻分类数据
  getCategoryData(): Category[] {
    return this.categories;
  }

  constructor() { }
}
