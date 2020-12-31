import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit {

  clickMessage = '';
  onClickMe(){
    this.clickMessage = "欢迎参加Angular的学习!";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
