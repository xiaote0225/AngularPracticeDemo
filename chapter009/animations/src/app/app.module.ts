import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListBasicComponent } from './user-list-basic/user-list-basic.component';
import { UserService } from './user.service';
import { UserListEnterLeaveComponent } from './user-list-enter-leave/user-list-enter-leave.component';
import { UserListAutoComponent } from './user-list-auto/user-list-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListBasicComponent,
    UserListEnterLeaveComponent,
    UserListAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
