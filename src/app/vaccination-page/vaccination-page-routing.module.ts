import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationPageComponent } from './vaccination-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: VaccinationPageComponent, 
    children: [
      {
        path: 'register', loadChildren: () => import('../register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule)
      },
      {
        path: 'update', loadChildren: () => import('../update-citicizen/update-citicizen.module').then(m => m.UpdateCiticizenModule)
      }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinationPageRoutingModule { }