import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test001',
  templateUrl: './test001.component.html',
  styleUrls: ['./test001.component.scss']
})
export class Test001Component implements OnInit {

  currentClasses:{} = {};
  currentStyles:{} = {};
  canSave:boolean = true;
  isUnchanged:boolean = false;
  isSpecial:boolean = true;
  
  setCurrentClasses(){
    this.currentClasses = {
      'saveable':this.canSave,
      'modified':!this.isUnchanged,
      'special':this.isSpecial
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'font-style':this.canSave ? 'italic':'normal',
      'font-weight':!this.isUnchanged ? 'bold':'normal',
      'font-size':this.isSpecial?'24px':'12px'
    }
  }

  constructor() { 
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngOnInit(): void {
  }

}
