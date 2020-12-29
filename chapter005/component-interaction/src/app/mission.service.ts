import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MissionService{
  //Observable string源
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  //Observable string流
  missionAnnouced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission:string){
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut:string){
    this.missionConfirmedSource.next(astronaut);
  }
}
