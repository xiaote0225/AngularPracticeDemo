import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MissionService } from "./mission.service";

@Component({
  selector:'app-astronaut',
  template:`
    <p>
      {{astronaut}}:<strong>{{mission}}</strong>
      <button (click)="confirm()" [disabled]="!announced || confirmed">确认</button>
    <p>
  `
})
export class AstronautComponent implements OnDestroy{
  @Input() astronaut:string = '';
  mission = '<没有任务>';
  confirmed = false;
  announced = false;
  subscription:Subscription;

  constructor(private missionService:MissionService){
    this.subscription = missionService.missionAnnouced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm(){
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
