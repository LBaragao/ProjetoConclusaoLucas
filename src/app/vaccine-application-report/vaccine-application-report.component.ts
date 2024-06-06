import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { PersonModel } from '../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vaccine-application-report',
  standalone: false,
  templateUrl: './vaccine-application-report.component.html',
  styleUrl: './vaccine-application-report.component.css'
})
export class VaccineApplicationReportComponent {

  searchForm: FormGroup;
  vaccinationData: any[] = [];
  displayedColumns: string[] = ['name', 'cpf', 'dose', 'application_date'];

  constructor(
    private fb: FormBuilder,
    private TaskService: TaskService,
    public dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  nomesVacinas!:string[];

  ngOnInit(): void {
    this.TaskService.getNomesVacinas().subscribe(
      (vacinas) => {
        this.nomesVacinas = vacinas.map((vacina: any) => vacina.name);
      },
      (error) => {
        console.error('Erro ao obter nomes das vacinas:', error)
      }
    )
}

  searchVaccine() {
    if (this.searchForm.valid) {
      const name = this.searchForm.get('name')?.value;
      this.TaskService.searchVaccine(name).subscribe({
        next: (response) => {
          const vaccine = response;
          this.fetchVaccinationData(vaccine.vaccine_Id);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  fetchVaccinationData(vaccineId: number) {
    this.TaskService.getVaccineAllApplications(vaccineId).subscribe(data => {
      this.vaccinationData = data.map((record: any) => ({
        name: record.patient.name,
        cpf: record.patient.cpf,
        dose: record.dose,
        application_date: record.application_date
      }));
    });
  }

}
