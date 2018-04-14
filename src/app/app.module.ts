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
import { DatesComponent } from './Date-app/dates/dates.component';
import { DateService } from './date.service';
import { DateDetailComponent } from './Date-app/date-detail/date-detail.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralsComponent,
    GeneralDetailComponent,
    CountryComponent,
    DatesComponent,
    DateDetailComponent,
    AboutComponent,

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
