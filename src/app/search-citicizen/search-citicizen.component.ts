import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { PersonModel } from '../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-citicizen',
  standalone: false,
  templateUrl: './search-citicizen.component.html',
  styleUrl: './search-citicizen.component.css'
})
export class SearchCiticizenComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    cellphone: new FormControl(''),
    telephone: new FormControl(''),
    address: new FormControl(''),
    complement: new FormControl(''),
    cep: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    email: new FormControl('')
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
  
}
