import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdBannerComponent } from './ad-banner.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdService } from './ad.service';
import { AdTwoComponent } from './ad-two.component';
import { AdDirective } from './ad.directive';
import { AdOneComponent } from './ad-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdOneComponent,
    AdTwoComponent,
    AdDirective
  ],
  entryComponents:[AdOneComponent,AdTwoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
