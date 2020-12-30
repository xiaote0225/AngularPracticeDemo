import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project002';
  str:string = '3';
  users:string[] = ['张三','李四','王五','赵六'];
  containerFlag:boolean = true;
}
