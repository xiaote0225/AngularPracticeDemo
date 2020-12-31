import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.scss']
})
export class BlurComponent implements OnInit {

  value = '';
  onEnter(value:string){
    this.value = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
