import { QuestionControlService } from './question-control.service';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers:[QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input()
  questions:QuestionBase<any>[] =[];
  form:FormGroup;
  payLoad = '';

  constructor(private qcs : QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}
