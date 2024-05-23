import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { VaccineModel } from '../models/vaccine.model';
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

  nomesVacinas!: string[];

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  ngOnInit(): void {
    this.taskService.getNomesVacinas().subscribe(
      (vacinas) => {
        this.nomesVacinas = vacinas.map((vacina: any) => vacina.name);
      },
      (error) => {
        console.error('Erro ao obter nomes das vacinas:', error)
      }
    )
  }

  
}
