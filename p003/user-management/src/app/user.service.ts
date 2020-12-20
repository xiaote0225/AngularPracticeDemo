import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = 'api/users';

  private httpOptions:Object = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getUsers(): Observable<User[]>{
    // this.messageService.add('UserService:已经获取到用户列表!');
    // return of(USERS);
    this.log('已经获取到用户列表!');
    return this.http.get<User[]>(this.usersURL).pipe(
      tap(Users => this.log('fetched Users')),
      catchError(this.handleError('getUsers',[]))
    );
  }

  private handleError<T> (operation = 'operation',result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getUser(id:number): Observable<User | undefined>{
    // this.messageService.add(`UserService:已经获取到用户 id=${id}`);
    // return of(USERS.find(user => user.id === id));
    this.log(`已经获取到用户 id=${id}`);
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id =${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  updateUser(user:User|undefined):Observable<any>{
    return this.http.put(this.usersURL,user,this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user?.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.usersURL,user,this.httpOptions).pipe(
      tap((user:User) => this.log(`added user id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  deleteUser(user:User | number):Observable<User>{
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersURL}/${id}`;

    return this.http.delete<User>(url,this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id =${id} ,wx666`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  searchUsers(term:string):Observable<User[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersURL}/?name=${term}`).pipe(
      tap(_ => this.log(`found Users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers',[]))
    );
  }

  private log(message: string){
    this.messageService.add(`UserService: ${message}`);
  }
}
