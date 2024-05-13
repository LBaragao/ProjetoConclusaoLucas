import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-vaccine',
  standalone: false,
  templateUrl: './delete-vaccine.component.html',
  styleUrl: './delete-vaccine.component.css'
})
export class DeleteVaccineComponent implements OnInit {
  searchForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

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

  deleteVaccine() {    
    this.taskService.deleteVaccine(this.searchForm.get("name")?.value).subscribe(
      {
        next: (response) => {
          if (response && response.success) { // Verifica se a exclusão foi bem-sucedida
            this.dialog.open(DialogComponent, { data: "Excluída com sucesso" })
              .afterClosed().pipe(take(1)).subscribe(() => this.location.back());
          } else {
            this.dialog.open(DialogComponent, { data: "Erro ao excluir vacina" });
          }
        }, 
        error: (err) => { console.error('Erro ao excluir:', err);}
      }
    )
  }
}
