import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {FormsModule} from '@angular/forms';
import {lessmuoihaiComponent} from './less12.component';

@NgModule({
  imports:     [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,TutorialComponent,lessmuoihaiComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
