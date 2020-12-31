import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pow-calculator',
  templateUrl: './pow-calculator.component.html',
  styleUrls: ['./pow-calculator.component.scss']
})
export class PowCalculatorComponent implements OnInit {

  power = 5;
  factor = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
