import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-a-child',
  templateUrl: './a-child.component.html',
  styleUrls: ['./a-child.component.scss'],
  // encapsulation:ViewEncapsulation.ShadowDom
  // encapsulation:ViewEncapsulation.Emulated
  // encapsulation:ViewEncapsulation.None
})
export class AChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
