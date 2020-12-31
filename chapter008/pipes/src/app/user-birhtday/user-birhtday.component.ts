import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-birhtday',
  templateUrl: './user-birhtday.component.html',
  styleUrls: ['./user-birhtday.component.scss']
})
export class UserBirhtdayComponent implements OnInit {
  birthday = new Date(1991,1,25);
  str:string = 'abcABC我是开发';
  date:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
