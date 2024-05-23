import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { RegisterVaccinationComponent } from './register-vaccination.component';
import { RegisterVaccinationRoutingModule } from './register-vaccination-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { CpfMaskDirective } from './cpf-mask.directive';



@NgModule({
  declarations: [RegisterVaccinationComponent, CpfMaskDirective],
  imports: [
    CommonModule,
    RegisterVaccinationRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, HttpClient, TaskService]
})
export class RegisterVaccinationModule { }