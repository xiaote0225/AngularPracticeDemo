import { Injectable } from '@angular/core';

import { USERS } from './mock-users';
import { LoggerService } from './../logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger:LoggerService) { }

  getHeroes(){
    this.logger.log('获取用户......');
    return USERS;
  }
}
