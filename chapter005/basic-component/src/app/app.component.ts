import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<h1>{{title}}666</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User Management(用户管理)';
}
