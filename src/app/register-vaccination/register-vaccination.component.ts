import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register-vaccination',
  standalone: false,
  templateUrl: './register-vaccination.component.html',
  styleUrl: './register-vaccination.component.css'
})
export class RegisterVaccinationComponent implements OnInit{
  registerForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    dose: new FormControl<number | undefined>(undefined, Validators.required)
  });
  
  searchForm = new FormGroup({
    cpf: new FormControl('', Validators.required)
  })

  nomesVacinas: {label: string, id: number}[] = [];
  patients!: any;

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  ngOnInit(): void {
    this.taskService.getNomesVacinas().subscribe(
      (vacinas) => {
        vacinas.map((vacina: any) => {
          const item = {label: vacina.name, id: vacina.vaccine_Id};
          this.nomesVacinas.push(item)
        });
        console.log(this.nomesVacinas)
      },
      (error) => {
        console.error('Erro ao obter nomes das vacinas:', error)
      }
    )
  }

  searchPatient() {
    const cpf = this.registerForm.get("cpf")?.value;
    console.log(cpf)
    this.taskService.searchPatient(cpf).subscribe(
      {
        next: (response) => {
          this.patients = response;
          if (!this.patients){
            this.dialog.open(DialogComponent, {data: "Paciente não cadastrado"})
            this.registerForm.get("cpf")?.setValue("");
          }
          else {
            this.dialog.open(DialogComponent, {data: "Paciente encontrado"})
          }
      },
        error: (err) => {
          console.log(err);
        }}
    )
  }

  registerApplication() {
    const data = {
      patient_Id: this.patients.patient_Id,
      vaccine_Id: this.registerForm.get("name")?.value,
      application_date: this.registerForm.get("date")?.value,
      dose: this.registerForm.get("dose")?.value
    }
    this.taskService.registerApplication(data).subscribe(
      { 
        next: (response) => {
          this.dialog.open(DialogComponent, {data: "Registrado com sucesso"})
          .afterClosed().pipe(take(1)).subscribe(()=>this.location.back())
        }, 
        error: (err) => { console.error('Erro ao registrar:', err);}
      }
    );
  }

  
}
