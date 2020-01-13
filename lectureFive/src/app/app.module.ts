import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDestComponent } from './user-dest/user-dest.component';
import {FormsModule} from '@angular/forms';
import { SourceEventComponent } from './source-event/source-event.component';
import { DestEventComponent } from './dest-event/dest-event.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserDestComponent,
    SourceEventComponent,
    DestEventComponent
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
