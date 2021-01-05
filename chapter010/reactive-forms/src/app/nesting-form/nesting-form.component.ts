import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nesting-form',
  templateUrl: './nesting-form.component.html',
  styleUrls: ['./nesting-form.component.css']
})
export class NestingFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  /*
  //受工实例化表单
  nestingForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
      city:new FormControl(''),
      street:new FormControl('')
    })
  });
  */

  //采用Builder模式来实例化表单
  nestingForm = this.fb.group({
    firstName:['',Validators.required],//使用验证器
    lastName:[''],
    address:this.fb.group({
      city:[''],
      street:['']
    })
  });

  onSubmit(){
    console.log(this.nestingForm.value);
    // console.warn(this.nestingForm.value);
  }

  updateProfile(){
    this.nestingForm.patchValue({
      firstName:'老卫',
      address:{
        street:'北京朝阳区'
      }
    });
  }

}
