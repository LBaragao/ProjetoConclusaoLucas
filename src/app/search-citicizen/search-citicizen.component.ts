import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

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
    cpf: new FormControl('', Validators.required),
    cellphone: new FormControl(''),
    telephone: new FormControl(''),
    address: new FormControl(''),
    complement: new FormControl(''),
    cep: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    email: new FormControl('')
  });

  

  // constructor(private taskService: TaskService) {}

  // onSubmit() {
  //   const formData = this.registerForm.value;
  //   this.taskService.registerPatient(formData).subscribe(
  //     (response) => {
  //       console.log('Registro bem sucedido:', response);
  //       // Você pode fazer algo após o sucesso, como redirecionar o usuário para outra página
  //     },
  //     (error) => {
  //       console.error('Erro ao registrar:', error);
  //       // Lida com erros, por exemplo, mostrando uma mensagem de erro ao usuário
  //     }
  //   )
  // }
}
