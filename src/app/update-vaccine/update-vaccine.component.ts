import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { VaccineModel } from '../models/vaccine.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-vaccine',
  standalone: false,
  templateUrl: './update-vaccine.component.html',
  styleUrl: './update-vaccine.component.css'
})
export class UpdateVaccineComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quantity: new FormControl<number | undefined>(undefined, Validators.required),
    doses_number: new FormControl<number | undefined>(undefined, Validators.required),
    period_between_applications: new FormControl(''),
    illness: new FormControl('', Validators.required)
  });

  searchForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  searchVaccine() {
    const name = this.searchForm.get("name")?.value;
    this.taskService.searchVaccine(name).subscribe(
      {
        next: (response) => {
          this.registerForm.get("name")?.setValue(response.name)
          this.registerForm.get("quantity")?.setValue(response.quantity)
          this.registerForm.get("doses_number")?.setValue(response.doses_number)
          this.registerForm.get("period_between_applications")?.setValue(response.period_between_applications)
          this.registerForm.get("illness")?.setValue(response.illness)
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  updateVaccine() {
    const vaccine = new VaccineModel(
      this.registerForm.get("name")?.value?.toString(),
      this.registerForm.get("quantity")?.value,
      this.registerForm.get("doses_number")?.value,
      this.registerForm.get("period_between_applications")?.value,
      this.registerForm.get("illness")?.value?.toString()
    );

    this.taskService.updateVaccine(vaccine).subscribe(
      {
        next: (response) => {
          this.dialog.open(DialogComponent, {data: "Atualizada com sucesso"})
          .afterClosed().pipe(take(1)).subscribe(()=>this.location.back())
        }, 
        error: (err) => { console.error('Erro ao registrar:', err);}
      }
    )
  }
}
