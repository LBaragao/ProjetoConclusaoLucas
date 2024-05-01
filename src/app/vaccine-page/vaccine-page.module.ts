import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinePageComponent } from './vaccine-page.component';
import { SharedComponentModule } from '../shared-component.module';
import { VaccinePageRoutingModule } from './vaccine-page-routing.module';



@NgModule({
  declarations: [VaccinePageComponent],
  imports: [
    CommonModule,
    VaccinePageRoutingModule,
    SharedComponentModule
  ],
  exports: [VaccinePageComponent]
})
export class VaccinePageModule { }