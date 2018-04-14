import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsComponent } from './generals-app/generals/generals.component';
import { GeneralDetailComponent } from './generals-app/general-detail/general-detail.component';
import { CountryComponent } from './generals-app/country/country.component';
import { DatesComponent } from './Date-app/dates/dates.component';
import { DateDetailComponent } from './Date-app/date-detail/date-detail.component';
import { AboutComponent } from './about/about.component';
import { DateAddComponent } from './date-app/date-add/date-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'generals', component: GeneralsComponent },
  { path: 'date', component: DatesComponent },
  { path: 'date/add', component:DateAddComponent},
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