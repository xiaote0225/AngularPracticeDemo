import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:User ={
    id: 1,
    name: '老卫'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
