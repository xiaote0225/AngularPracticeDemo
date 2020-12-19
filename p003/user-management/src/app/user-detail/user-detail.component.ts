import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user:User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():void{
    const id = this.route.snapshot.paramMap.get('id');
    const idNum = id === null ? 0 : + id;
    this.userService.getUser(idNum).subscribe(user => this.user = user);

  }

  goBack():void{
    this.location.back();
  }

}
