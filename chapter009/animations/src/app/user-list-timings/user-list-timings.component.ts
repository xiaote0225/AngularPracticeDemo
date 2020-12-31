import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list-timings',
  templateUrl: './user-list-timings.component.html',
  styleUrls: ['./user-list-timings.component.scss'],
  animations:[
    trigger('flyInOut',[
      state('in',style({opacity:1,transform:'translateX(0)'})),
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(-100%)'
        }),
        animate('0.8s 1s ease-in')
      ]),
      transition('* => void',[
        animate('0.8s 0.5s ease-out',style({
          opacity:0,
          transform:'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class UserListTimingsComponent implements OnInit {

  @Input()
  users:User[];
  constructor() { }

  ngOnInit(): void {
  }

}
