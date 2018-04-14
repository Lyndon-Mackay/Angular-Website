import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { CountryComponent } from './country/country.component';
import { DatesComponent } from './Date-app/dates/dates.component';
import { DateDetailComponent } from './Date-app/date-detail/date-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'generals', component: GeneralsComponent },
  { path: 'date', component: DatesComponent },
  { path: 'date/:ID',component:DateDetailComponent},
  { path: 'detail/:Name', component: GeneralDetailComponent },
  { path: 'country/:Country', component: CountryComponent },
  { path: 'about' , component :AboutComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}