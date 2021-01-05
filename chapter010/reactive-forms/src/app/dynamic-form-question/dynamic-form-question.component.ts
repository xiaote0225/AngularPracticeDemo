import { QuestionBase } from './../dynamic-form/question-base';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input()
  question:QuestionBase<any>;
  @Input()
  form:FormGroup;
  get isValid(){
    return this.form.controls[this.question.key].valid;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
