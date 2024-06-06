import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { VaccineApplicationReportComponent } from './vaccine-application-report.component';
import { VaccineApplicationReportRoutingModule } from './vaccine-application-report-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [VaccineApplicationReportComponent],
  imports: [
    CommonModule,
    VaccineApplicationReportRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, HttpClient, TaskService]
})
export class VaccineApplicationReportModule { }