import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { VaccineModel } from '../models/vaccine.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register-vaccine',
  standalone: false,
  templateUrl: './register-vaccine.component.html',
  styleUrl: './register-vaccine.component.css'
})
export class RegisterVaccineComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quantity: new FormControl<number | undefined>(undefined, Validators.required),
    doses_number: new FormControl<number | undefined>(undefined, Validators.required),
    period_between_applications: new FormControl(''),
    illness: new FormControl('', Validators.required)
  });

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  register() {
    const vaccine = new VaccineModel(
      this.registerForm.get("name")?.value?.toString(),
      this.registerForm.get("quantity")?.value,
      this.registerForm.get("doses_number")?.value,
      this.registerForm.get("period_between_applications")?.value,
      this.registerForm.get("illness")?.value?.toString()
    );
    
    this.taskService.registerVaccine(vaccine).subscribe(
      { 
        next: (response) => {
          this.dialog.open(DialogComponent, {data: "Registrada com Sucesso"})
          .afterClosed().pipe(take(1)).subscribe(()=>this.location.back())
        }, 
        error: (err) => { console.error('Erro ao registrar:', err);}
      } 
    );
  }
}
