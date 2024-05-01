import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinePageComponent } from './vaccine-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: VaccinePageComponent, 
    children: [
      {
        path: 'register', loadChildren: () => import('../register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule)
      },
      {
        path: 'update', loadChildren: () => import('../update-citicizen/update-citicizen.module').then(m => m.UpdateCiticizenModule)
      }
  ] },
  // { path: 'register', loadChildren: () => import('../register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinePageRoutingModule { }