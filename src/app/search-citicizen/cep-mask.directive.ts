import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCepMask]'
})
export class CepMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let cep = this.el.nativeElement.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (cep.length > 8) {
      cep = cep.substring(0, 8); // Limita a 11 dígitos
    }

    cep = cep.replace(/(\d)(\d{3})$/, '$1-$2');

    this.el.nativeElement.value = cep;
  }
}