import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBirhtdayComponent } from './user-birhtday/user-birhtday.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';
import { PercentPipeComponent } from './percent-pipe/percent-pipe.component';
import { PowCalculatorPipe } from './pow-calculator.pipe';
import { PowCalculatorComponent } from './pow-calculator/pow-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBirhtdayComponent,
    CurrencyPipeComponent,
    PercentPipeComponent,
    PowCalculatorPipe,
    PowCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
