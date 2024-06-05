import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-component.module';
import { PersonalApplicationReportComponent } from './personal-application-report.component';
import { PersonalApplicationReportRoutingModule } from './personal-application-report-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { CpfMaskDirective } from './cpf-mask.directive';
import { MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [PersonalApplicationReportComponent, CpfMaskDirective],
  imports: [
    CommonModule,
    PersonalApplicationReportRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, HttpClient, TaskService]
})
export class PersonalApplicationReportModule { }