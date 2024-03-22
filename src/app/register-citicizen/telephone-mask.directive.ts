import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTelephoneMask]'
})
export class TelephoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let telephone = this.el.nativeElement.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (telephone.length > 10) {
      telephone = telephone.substring(0, 10); // Limita a 11 dígitos
    }

    this.el.nativeElement.value = telephone;
  }
}