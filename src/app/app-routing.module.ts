import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsComponent } from './generals/generals.component';
import { GeneralDetailComponent } from './general-detail/general-detail.component';

const routes: Routes = [
  { path: 'generals', component: GeneralsComponent },
  { path: 'detail/:Name', component: GeneralDetailComponent },
  { path: '', redirectTo: '/generals', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}