import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQualityComponent } from './air-quality/air-quality.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //导入HttpClientModule模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
