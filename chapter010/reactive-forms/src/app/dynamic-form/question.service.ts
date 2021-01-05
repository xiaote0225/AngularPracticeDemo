import { Type } from '@angular/core';
import { TextboxQuestion } from './question-textbox';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { Injectable } from '@angular/core';
@Injectable()
export class QuestionService{
  getQuestions(){
    let questions:QuestionBase<any>[] = [
      new DropdownQuestion({
        key:'brave',
        label:'评级',
        options:[
          {key:'solid',value:'Solid'},
          {key:'great',value:'Great'},
          {key:'good',value:'Good'},
          {key:'unproven',value:'Unproven'}
        ],
        order:3
      }),
      new TextboxQuestion({
        key:'firstName',
        label:'名字',
        value:'柳伟卫',
        required:true,
        order:1
      }),
      new TextboxQuestion({
        key:'emailAddress',
        label:'Email',
        type:'email',
        order:2
      })
    ];
    return questions.sort((a,b) => a.order - b.order);
  }
}
