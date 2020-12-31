import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.scss']
})
export class KeyupComponent implements OnInit {

  values = '';

  onKey(event:KeyboardEvent){
    console.log(event);
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
