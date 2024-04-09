import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-update-citicizen',
  standalone: false,
  templateUrl: './update-citicizen.component.html',
  styleUrl: './update-citicizen.component.css'
})
export class UpdateCiticizenComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    telephone: new FormControl(''),
    address: new FormControl('', Validators.required),
    complement: new FormControl(''),
    cep: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
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