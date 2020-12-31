import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list-auto',
  templateUrl: './user-list-auto.component.html',
  styleUrls: ['./user-list-auto.component.scss'],
  animations:[
    trigger('shrinkOut',[
      state('in',style({height:'*'})),
      transition('* => void',[
        style({height:'*'}),
        animate(250,style({height:0}))
      ])
    ])
  ]
})
export class UserListAutoComponent implements OnInit {

  @Input()
  users:User[];

  constructor() { }

  ngOnInit(): void {
  }

}
