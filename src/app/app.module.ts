import { NgModule, Component } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HelloComponent, SamComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent, SamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

