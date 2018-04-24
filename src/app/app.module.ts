import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';


import { AppComponent } from './app.component';
import { ItunesSearchComponent } from './itunes-search/itunes-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ItunesSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
