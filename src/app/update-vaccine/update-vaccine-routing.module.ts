import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateVaccineComponent } from './update-vaccine.component';

const routes: Routes = [
  { path: '', component: UpdateVaccineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateVaccineRoutingModule { }