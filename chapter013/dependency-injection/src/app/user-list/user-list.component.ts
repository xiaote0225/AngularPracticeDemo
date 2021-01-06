import { Component, OnInit } from '@angular/core';

import { User } from '../users/user';
import { UserService } from './../users/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];

  constructor(userService:UserService) {
    this.users = userService.getHeroes();
  }

  ngOnInit(): void {
  }

}
