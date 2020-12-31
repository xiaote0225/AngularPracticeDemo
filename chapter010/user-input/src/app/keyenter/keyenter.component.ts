import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyenter',
  templateUrl: './keyenter.component.html',
  styleUrls: ['./keyenter.component.scss']
})
export class KeyenterComponent implements OnInit {

  value = '';

  onEnter(value:string){
    this.value = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
