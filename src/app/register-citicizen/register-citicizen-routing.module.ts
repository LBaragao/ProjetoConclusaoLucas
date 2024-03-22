import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCiticizenComponent } from './register-citicizen.component';

const routes: Routes = [
  { path: '', component: RegisterCiticizenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCiticizenRoutingModule { }