import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { FlightComponent }  from './app.flightcomponent';
import { HttpModule } from '@angular/http';
import { SearchPipe }  from './app.filter';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent ,FlightComponent, SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
