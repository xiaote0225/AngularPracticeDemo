import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserParentComponent } from './user-parent.component';
import { UserChildComponent } from './user-child.component';

let directives:any[] = [
  AppComponent,
  UserChildComponent,
  UserParentComponent
];

@NgModule({
  declarations: directives,
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
