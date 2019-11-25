import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent, SamComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule, MatCardModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, SamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

