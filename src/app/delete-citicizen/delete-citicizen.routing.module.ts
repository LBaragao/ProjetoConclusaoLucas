import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteCiticizenComponent } from './delete-citicizen.component';

const routes: Routes = [
  { path: '', component: DeleteCiticizenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteCiticizenRoutingModule { }