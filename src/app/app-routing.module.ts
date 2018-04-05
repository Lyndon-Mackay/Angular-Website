import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: 'generals', component: GeneralsComponent },
  { path: 'detail/:Name', component: GeneralDetailComponent },
  { path: 'country/:Country', component: CountryComponent },
  { path: '', redirectTo: '/generals', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}