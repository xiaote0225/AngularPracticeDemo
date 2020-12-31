import { Component } from '@angular/core';

import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animations';
  users:User[];
  constructor(private userService:UserService){
    this.users = userService.getAllUsers();
  }
}
