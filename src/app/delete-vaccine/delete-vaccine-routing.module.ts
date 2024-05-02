import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteVaccineComponent } from './delete-vaccine.component';

const routes: Routes = [
  { path: '', component: DeleteVaccineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteVaccineRoutingModule { }