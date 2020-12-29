import { Component } from "@angular/core";

@Component({
  selector: 'app-vote-taker',
  template:`
    <h2>投票器</h2>
    <h3>同意:{{agreed}},反对:{{disagreed}}</h3>
    <app-votor *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)">
    </app-votor>
  `
})
export class VotorTakerComponent{
  agreed = 0;
  disagreed = 0;
  voters = ['Way Lau','Bombasto','Magma'];
  onVoted(agreed:boolean){
    agreed ? this.agreed++ : this.disagreed++;
  }
}
