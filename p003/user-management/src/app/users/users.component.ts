import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = USERS;

  selectedUser: User = {id:1,name:'123'};

  onSelect(user:User):void{
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
