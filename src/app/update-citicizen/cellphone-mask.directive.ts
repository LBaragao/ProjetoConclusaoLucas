import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCellphoneMask]'
})
export class CellphoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let cellphone = this.el.nativeElement.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (cellphone.length > 11) {
      cellphone = cellphone.substring(0, 11); // Limita a 11 dígitos
    }

    this.el.nativeElement.value = cellphone;
  }
}