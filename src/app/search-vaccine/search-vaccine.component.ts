import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { VaccineModel } from '../models/vaccine.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-vaccine',
  standalone: false,
  templateUrl: './search-vaccine.component.html',
  styleUrl: './search-vaccine.component.css'
})
export class SearchVaccineComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    doses_number: new FormControl(''),
    period_between_applications: new FormControl(''),
    illness: new FormControl('')
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
}
