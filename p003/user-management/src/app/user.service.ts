import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]>{
    this.messageService.add('UserService:已经获取到用户列表!');
    return of(USERS);
  }

  getUser(id:number): Observable<User | undefined>{
    this.messageService.add(`UserService:已经获取到用户 id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
