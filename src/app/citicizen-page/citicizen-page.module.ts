import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiticizenPageComponent } from './citicizen-page.component';
import { SharedComponentModule } from '../shared-component.module';
import { CiticizenPageRoutingModule } from './citicizen-page-routing.module';



@NgModule({
  declarations: [CiticizenPageComponent],
  imports: [
    CommonModule,
    CiticizenPageRoutingModule,
    SharedComponentModule
  ],
  exports: [CiticizenPageComponent]
})
export class CiticizenPageModule { }
