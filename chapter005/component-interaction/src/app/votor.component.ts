import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'app-votor',
  template:`
    <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="didVote">同意</button>
    <button (click)="vote(false)" [disabled]="didVote">反对</button>
  `
})
export class VotorComponent{
  @Input() name:string | undefined;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
