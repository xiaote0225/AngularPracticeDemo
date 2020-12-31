import { state, style, transition, trigger, animate, group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list-groups',
  templateUrl: './user-list-groups.component.html',
  styleUrls: ['./user-list-groups.component.scss'],
  animations:[
    trigger('flyInOut',[
      state('in',style({width:120,transform:'translateX(0)',opacity:1})),
      transition('void => *',[
        style({width:10,transform:'translateX(50px)',opacity:0}),
        group([
          animate('0.3s 0.1s ease',style({
            transform:'translateX(0)',
            width:120
          })),
          animate('0.3s ease',style({
            opacity:1
          }))
        ])
      ]),
      transition('* => void',[
        group([
          animate('0.3s ease',style({
            transform:'translateX(50px)',
            width:10
          })),
          animate('0.3s 0.2s ease',style({
            opacity:0
          }))
        ])
      ])
    ]),
  ]
})
export class UserListGroupsComponent implements OnInit {

  @Input() users:User[];
  constructor() { }

  ngOnInit(): void {
  }

}
