import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { UpdateCiticizenComponent } from './update-citicizen.component';
import { UpdateCiticizenRoutingModule } from './update-citicizen-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CpfMaskDirective } from './cpf-mask.directive';
import { CellphoneMaskDirective } from './cellphone-mask.directive';
import { TelephoneMaskDirective } from './telephone-mask.directive';
import { CepMaskDirective } from './cep-mask.directive';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';

@NgModule({
  declarations: [UpdateCiticizenComponent, CpfMaskDirective, CellphoneMaskDirective, TelephoneMaskDirective, CepMaskDirective],
  imports: [
    CommonModule,
    UpdateCiticizenRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, HttpClient, TaskService]
})
export class UpdateCiticizenModule { }