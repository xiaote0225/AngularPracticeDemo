import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.scss']
})
export class PercentPipeComponent implements OnInit {
  a:number = 0.256;
  b:number = 0.256789;

  constructor() { }

  ngOnInit(): void {
  }

}
