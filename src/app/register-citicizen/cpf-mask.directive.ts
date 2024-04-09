import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let cpf = this.el.nativeElement.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11); // Limita a 11 dígitos
    }

    // Aplica a máscara de formatação
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.el.nativeElement.value = cpf; // Atualiza o campo com o valor formatado
  }
}