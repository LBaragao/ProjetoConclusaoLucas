import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { RegisterCiticizenComponent } from './register-citicizen.component';
import { RegisterCiticizenRoutingModule } from './register-citicizen-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CpfMaskDirective } from '../cpf-mask.directive';
import { CellphoneMaskDirective } from './cellphone-mask.directive';
import { TelephoneMaskDirective } from './telephone-mask.directive';
import { CepMaskDirective } from './cep-mask.directive';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [RegisterCiticizenComponent, CpfMaskDirective, CellphoneMaskDirective, TelephoneMaskDirective, CepMaskDirective],
  imports: [
    CommonModule,
    RegisterCiticizenRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class RegisterCiticizenModule { }