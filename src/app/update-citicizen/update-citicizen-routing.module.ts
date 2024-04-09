import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCiticizenComponent } from './update-citicizen.component';

const routes: Routes = [
  { path: '', component: UpdateCiticizenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCiticizenRoutingModule { }