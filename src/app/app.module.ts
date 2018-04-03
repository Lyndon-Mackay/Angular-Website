import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralService } from './general.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GeneralDetailComponent } from './general-detail/general-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralsComponent,
    GeneralDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
