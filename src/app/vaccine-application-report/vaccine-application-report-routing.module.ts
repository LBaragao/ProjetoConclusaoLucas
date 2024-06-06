import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineApplicationReportComponent } from './vaccine-application-report.component';

const routes: Routes = [
  { path: '', component: VaccineApplicationReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineApplicationReportRoutingModule { }