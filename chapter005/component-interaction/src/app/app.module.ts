import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserParentComponent } from './user-parent.component';
import { UserChildComponent } from './user-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VotorComponent } from './votor.component';
import { VotorTakerComponent } from './votortaker.component';

let directives:any[] = [
  AppComponent,
  UserChildComponent,
  UserParentComponent,
  NameChildComponent,
  NameParentComponent,
  VersionParentComponent,
  VersionChildComponent,
  VotorTakerComponent,
  VotorComponent
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
