import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourceCompComponent } from './source-comp/source-comp.component';
import { DestCompComponent } from './dest-comp/dest-comp.component';
import { SourceViewCompComponent } from './source-view-comp/source-view-comp.component';
import { DestViewCompComponent } from './dest-view-comp/dest-view-comp.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SourceCompComponent,
    DestCompComponent,
    SourceViewCompComponent,
    DestViewCompComponent
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
