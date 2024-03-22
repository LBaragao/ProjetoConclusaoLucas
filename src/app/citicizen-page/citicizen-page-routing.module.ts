import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiticizenPageComponent } from './citicizen-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: CiticizenPageComponent, 
    children: [
      {
        path: 'register', loadChildren: () => import('../register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule)
      }
  ] },
  // { path: 'register', loadChildren: () => import('../register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiticizenPageRoutingModule { }