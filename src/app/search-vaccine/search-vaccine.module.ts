import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { SearchVaccineComponent } from './search-vaccine.component';
import { SearchVaccineRoutingModule } from './search-vaccine-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';



@NgModule({
  declarations: [SearchVaccineComponent],
  imports: [
    CommonModule,
    SearchVaccineRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, HttpClient, TaskService]
})
export class SearchVaccineModule { }