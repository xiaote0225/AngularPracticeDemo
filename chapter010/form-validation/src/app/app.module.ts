import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormTemplateComponent } from './user-form-template/user-form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormTemplateComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UserFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
