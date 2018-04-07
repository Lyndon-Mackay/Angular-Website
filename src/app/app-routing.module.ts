import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { CountryComponent } from './country/country.component';
import { DatesComponent } from './dates/dates.component';

const routes: Routes = [
  { path: 'generals', component: GeneralsComponent },
  { path: 'date', component: DatesComponent },
  { path: 'detail/:Name', component: GeneralDetailComponent },
  { path: 'country/:Country', component: CountryComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}