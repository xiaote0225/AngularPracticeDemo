import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl('')
  });

  onSubmit(){
    console.log(this.profileForm.value);
    // console.warn(this.profileForm.value);
    // console.error(this.profileForm.value);
  }

}
