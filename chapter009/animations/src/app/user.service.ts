import { Injectable } from "@angular/core";

export class User{
  constructor(public name:string,public state = 'inactive'){}

  toggleState(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}

const ALL_USERS = [
  'Way Lau',
  'Narco',
  'Bombasto'
].map(name => new User(name));

@Injectable()
export class UserService{
  users:User[] = [];

  getAllUsers(){
    this.users = ALL_USERS;
    return this.users;
  }
}
