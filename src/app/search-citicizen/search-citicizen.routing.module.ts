import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCiticizenComponent } from './search-citicizen.component';

const routes: Routes = [
  { path: '', component: SearchCiticizenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCiticizenRoutingModule { }