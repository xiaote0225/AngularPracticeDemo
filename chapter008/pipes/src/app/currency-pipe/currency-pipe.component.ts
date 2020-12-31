import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss']
})
export class CurrencyPipeComponent implements OnInit {

  a:number = 0.259;
  b:number = 1.3495;

  constructor() { }

  ngOnInit(): void {
  }

}
