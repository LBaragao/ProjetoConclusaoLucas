import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PersonModel } from '../models/person.model';

@Component({
  selector: 'app-delete-citicizen',
  standalone: false,
  templateUrl: './delete-citicizen.component.html',
  styleUrl: './delete-citicizen.component.css'
})
export class DeleteCiticizenComponent {

  searchForm = new FormGroup({
    cpf: new FormControl('', Validators.required)
  })

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  searchPatient() {
    const cpf = this.searchForm.get("cpf")?.value;
    this.taskService.searchPatient(cpf).subscribe(
      {
        next: (response) => {
          if (response && response.name) { // Verifica se a resposta contém dados válidos
            this.dialog.open(DialogComponent, { data: "Paciente encontrado" });
          } else {
            this.dialog.open(DialogComponent, { data: "Paciente não encontrado" });
          }
      },
        error: (err) => {
          console.log(err);
        }}
    )
  }

  deletePatient() {    
    this.taskService.deletePatient(this.searchForm.get("cpf")?.value?.toString()).subscribe(
      {
        next: (response) => {
          if (response && response.success) { // Verifica se a exclusão foi bem-sucedida
            this.dialog.open(DialogComponent, { data: "Excluído com Sucesso" })
              .afterClosed().pipe(take(1)).subscribe(() => this.location.back());
          } else {
            this.dialog.open(DialogComponent, { data: "Erro ao excluir paciente" });
          }
        }, 
        error: (err) => { console.error('Erro ao excluir:', err);}
      }
    )
  }
}
