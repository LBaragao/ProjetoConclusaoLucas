import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { PersonModel } from '../models/person.model';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';
import {Location} from '@angular/common';


@Component({
  selector: 'app-register-citicizen',
  standalone: false,
  templateUrl: './register-citicizen.component.html',
  styleUrl: './register-citicizen.component.css'
})
export class RegisterCiticizenComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    cpf: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    telephone: new FormControl(''),
    address: new FormControl('', Validators.required),
    complement: new FormControl(''),
    cep: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  register() {
    const person = new PersonModel(
      this.registerForm.get("name")?.value?.toString(),
      this.registerForm.get("date")?.value,
      this.registerForm.get("cpf")?.value?.toString(),
      this.registerForm.get("cellphone")?.value?.toString(),
      this.registerForm.get("telephone")?.value?.toString(),
      this.registerForm.get("address")?.value?.toString(),
      this.registerForm.get("complement")?.value?.toString(),
      this.registerForm.get("cep")?.value?.toString(),
      this.registerForm.get("city")?.value?.toString(),
      this.registerForm.get("state")?.value?.toString(),
      this.registerForm.get("email")?.value?.toString()
    );
    
    this.taskService.registerPatient(person).subscribe(
      { 
        next: (response) => {
          this.dialog.open(DialogComponent, {data: "Registrado com Sucesso"})
          .afterClosed().pipe(take(1)).subscribe(()=>this.location.back())
        }, 
        error: (err) => { console.error('Erro ao registrar:', err);}
      } 
    );
  }

}
