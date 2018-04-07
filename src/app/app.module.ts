import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralService } from './general.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { CountryComponent } from './country/country.component';
import { DatesComponent } from './dates/dates.component';
import { DateService } from './date.service';


@NgModule({
  declarations: [
    AppComponent,
    GeneralsComponent,
    GeneralDetailComponent,
    CountryComponent,
    DatesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [GeneralService,DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
