import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralService } from './general.service';


@NgModule({
  declarations: [
    AppComponent,
    GeneralsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
