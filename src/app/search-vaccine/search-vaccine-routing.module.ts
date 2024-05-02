import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchVaccineComponent } from './search-vaccine.component';

const routes: Routes = [
  { path: '', component: SearchVaccineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchVaccineRoutingModule { }