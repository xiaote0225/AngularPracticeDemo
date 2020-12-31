import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list-enter-leave',
  templateUrl: './user-list-enter-leave.component.html',
  styleUrls: ['./user-list-enter-leave.component.scss'],
  animations:[
    trigger('flyInOut',[
      state('in',style({transform:'translateX(0)'})),
      transition('void => *',[
        style({transform:'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void',[
        animate(1000,style({transform:'translateX(100%)'}))
      ])
    ])
  ]
})
export class UserListEnterLeaveComponent implements OnInit {
  @Input()
  users:User[];

  constructor() { }

  ngOnInit(): void {
  }

}
