import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, PipeTransform } from '@angular/core';

import { User } from '../user.service';

@Component({
  selector: 'app-user-list-basic',
  templateUrl: './user-list-basic.component.html',
  styleUrls: ['./user-list-basic.component.scss'],
  animations:[
    trigger('userState',[
      state('inactive',style({
        backgroundColor:'red',
        transform:'scale(1)'
      })),
      state('active',style({
        backgroundColor:'green',
        transform:'scale(0.5)'
      })),
      transition('inactive => active',animate('200ms ease-in')),
      transition('active => inactive',animate('200ms ease-out'))
    ])
  ]
})
export class UserListBasicComponent implements OnInit {

  @Input() users:User[];
  constructor() { }

  ngOnInit(): void {
  }

}
