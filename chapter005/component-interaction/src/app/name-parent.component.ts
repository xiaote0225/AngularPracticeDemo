import { Component } from "@angular/core";

@Component({
    selector:'app-name-parent',
    template:`
        <h2>{{master}}有{{users.length}}个学生</h2>
        <app-name-child *ngFor="let user of users" [name]='user'></app-name-child>
    `
})
export class NameParentComponent{
    users = ['Way Lau', '  ', ' BomBasto ',' Magma'];
    master = '老卫';
}