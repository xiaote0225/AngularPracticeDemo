import { Component, ViewChild } from "@angular/core";
import { CountdownTimerComponent } from "./countdown-timer.component";

@Component({
  selector:'app-countdown-parent-vc',
  template:`
    <h3>时间递减(ViewChild)</h3>
    <button (click)="decrease()">递减</button>
    <div class="seconds">{{seconds()}}</div>
    <app-countdown-timer #countdownTimer></app-countdown-timer>
  `,
  styleUrls:['../assets/demo.css']
})
export class CountdownViewParentComponent{
  @ViewChild(CountdownTimerComponent)
  private timerComponent:CountdownTimerComponent | undefined;

  decrease(){
    this.timerComponent?.decrease();
  }

  seconds(){
    return this.timerComponent?.seconds;
  }


}
