import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { PersonModel } from '../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';


@Component({
  selector: 'app-personal-application-report',
  standalone: false,
  templateUrl: './personal-application-report.component.html',
  styleUrl: './personal-application-report.component.css'
})
export class PersonalApplicationReportComponent {

  searchForm: FormGroup;
  vaccinationData: any[] = [];
  displayedColumns: string[] = ['vaccine', 'dose', 'application_date'];

  constructor(
    private fb: FormBuilder,
    private TaskService: TaskService,
    public dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      cpf: ['', [Validators.required]]
    });
  }

  searchPatient() {
    if (this.searchForm.valid) {
      const cpf = this.searchForm.get('cpf')?.value;
      this.TaskService.searchPatient(cpf).subscribe({
        next: (response) => {
          const patient = response;
          if (!patient) {
            this.dialog.open(DialogComponent, { data: 'Paciente não cadastrado' });
            this.searchForm.reset();
          } else {
            this.fetchVaccinationData(patient.patient_Id);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  fetchVaccinationData(patientId: number) {
    this.TaskService.getPatientAllApplications(patientId).subscribe(data => {
      this.vaccinationData = data.map((record: any) => ({
        vaccine: record.vaccine.name,
        dose: record.dose,
        application_date: record.application_date
      }));
    });
  }

}
