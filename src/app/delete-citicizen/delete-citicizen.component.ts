import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-delete-citicizen',
  standalone: false,
  templateUrl: './delete-citicizen.component.html',
  styleUrl: './delete-citicizen.component.css'
})
export class DeleteCiticizenComponent {
  registerForm = new FormGroup({
    cpf: new FormControl('', Validators.required)
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
