import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test001Component } from './test001/test001.component';
import { HighlightDirective } from './highlight.directive';
import { HilightV2Directive } from './hilight-v2.directive';

@NgModule({
  declarations: [
    AppComponent,
    Test001Component,
    HighlightDirective,
    HilightV2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
