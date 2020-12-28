import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
  DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{
  title = '生命周期钩子的例子';
  logIndex:number = 1;
  @Input() name:string = '';
  constructor(){
    this.logIt("constructor");
  }
  logIt(msg:string){
    console.log(`#${this.logIndex++} ${msg}`);
  }
  ngOnInit(): void {
    this.logIt("ngOnInit");
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }
  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }
  ngOnChanges(changes: SimpleChanges): void {
    let nameCurrentValue = changes['name'].currentValue;
    let namePreviousValue = changes['name'].previousValue;
    this.logIt("ngOnChanges的currentValue值是"+nameCurrentValue);
    this.logIt("ngOnChanges的previousValue值是"+namePreviousValue);
  }
}
