import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // users = USERS;
  users: User[] | undefined;

  // selectedUser: User = {id:1,name:'123'};

  // onSelect(user:User):void{
  //   this.selectedUser = user;
  // }

  getUsers():void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  add(name:string):void{
    name = name.trim();
    if(!name){
      return;
    }
    this.userService.addUser({name} as User).subscribe(
      user => {
        this.users?.push(user)
      }
    );
  }

  delete(user:User):void{
    this.users = this.users?.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
