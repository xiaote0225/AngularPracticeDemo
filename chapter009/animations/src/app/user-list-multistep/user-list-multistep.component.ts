import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-list-multistep',
  templateUrl: './user-list-multistep.component.html',
  styleUrls: ['./user-list-multistep.component.scss'],
  animations:[
    trigger('flyInOut',[
      state('in',style({transform:'translateX(0)'})),
      transition('void => *',[
        animate(300,keyframes([
          style({opacity:0,transform:'translateX(-100%)',offset:0}),
          style({opacity:1,transform:'translateX(15px)',offset:0.3}),
          style({opacity:1,transform:'translateX(0)',offset:1.0})
        ]))
      ]),
      transition('* => void',[
        animate(300,keyframes([
          style({opacity:1,transform:'translateX(0)',offset:0}),
          style({opacity:1,transform:'translateX(-15px)',offset:0.7}),
          style({opacity:0,transform:'translateX(100%)',offset:1.0})
        ]))
      ])
    ])
  ]
})
export class UserListMultistepComponent implements OnInit {

  @Input() users:User[];

  constructor() { }

  ngOnInit(): void {
  }

  animationStarted(event:AnimationEvent){
    console.warn("Animation started: ",event);
  }

  animationDone(event:AnimationEvent){
    console.warn("Animation done: ",event);
  }

}
