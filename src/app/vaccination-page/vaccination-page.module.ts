import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinationPageComponent } from './vaccination-page.component';
import { SharedComponentModule } from '../shared-component.module';
import { VaccinationPageRoutingModule } from './vaccination-page-routing.module';



@NgModule({
  declarations: [VaccinationPageComponent],
  imports: [
    CommonModule,
    VaccinationPageRoutingModule,
    SharedComponentModule
  ],
  exports: [VaccinationPageComponent]
})
export class VaccinationPageModule { }