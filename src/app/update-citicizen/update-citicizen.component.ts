import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { PersonModel } from '../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';


@Component({
  selector: 'app-update-citicizen',
  standalone: false,
  templateUrl: './update-citicizen.component.html',
  styleUrl: './update-citicizen.component.css'
})
export class UpdateCiticizenComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    cellphone: new FormControl('', Validators.required),
    telephone: new FormControl(''),
    address: new FormControl('', Validators.required),
    complement: new FormControl(''),
    cep: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  searchForm = new FormGroup({
    cpf: new FormControl('', Validators.required)
  })

  

  constructor(private taskService: TaskService, private dialog: MatDialog, private location: Location) {}

  searchPatient() {
    const cpf = this.searchForm.get("cpf")?.value;
    this.taskService.searchPatient(cpf).subscribe(
      {
        next: (response) => {
          this.registerForm.get("name")?.setValue(response.name)
          this.registerForm.get("date")?.setValue(response.birth_date)
          this.registerForm.get("cellphone")?.setValue(response.cellphone)
          this.registerForm.get("telephone")?.setValue(response.telephone)
          this.registerForm.get("address")?.setValue(response.address)
          this.registerForm.get("complement")?.setValue(response.complement)
          this.registerForm.get("cep")?.setValue(response.cep)
          this.registerForm.get("city")?.setValue(response.city)
          this.registerForm.get("state")?.setValue(response.state)
          this.registerForm.get("email")?.setValue(response.email)
      },
        error: (err) => {
          console.log(err);
        }}
    )
  }

  updatePatient() {
    const person = new PersonModel(
      this.registerForm.get("name")?.value?.toString(),
      this.registerForm.get("date")?.value,
      this.searchForm.get("cpf")?.value?.toString(),
      this.registerForm.get("cellphone")?.value?.toString(),
      this.registerForm.get("telephone")?.value?.toString(),
      this.registerForm.get("address")?.value?.toString(),
      this.registerForm.get("complement")?.value?.toString(),
      this.registerForm.get("cep")?.value?.toString(),
      this.registerForm.get("city")?.value?.toString(),
      this.registerForm.get("state")?.value?.toString(),
      this.registerForm.get("email")?.value?.toString()
    );
    
    this.taskService.updatePatient(person).subscribe(
      { 
        next: (response) => {
          this.dialog.open(DialogComponent, {data: "Atualizado com Sucesso"})
          .afterClosed().pipe(take(1)).subscribe(()=>this.location.back())
        }, 
        error: (err) => { console.error('Erro ao registrar:', err);}
      } 
    );
  }


}