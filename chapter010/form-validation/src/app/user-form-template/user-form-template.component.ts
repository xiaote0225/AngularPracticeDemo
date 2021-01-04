import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-template',
  templateUrl: './user-form-template.component.html',
  styleUrls: ['./user-form-template.component.scss']
})
export class UserFormTemplateComponent implements OnInit {

  jobs = ['工程师','医生','教师'];

  user = {name:'刘维维',age:32,job:this.jobs[0]};

  constructor() { }

  ngOnInit(): void {
  }

}
