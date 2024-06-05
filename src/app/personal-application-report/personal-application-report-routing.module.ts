import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalApplicationReportComponent } from './personal-application-report.component';

const routes: Routes = [
  { path: '', component: PersonalApplicationReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalApplicationReportRoutingModule { }