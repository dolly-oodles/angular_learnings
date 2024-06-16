import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpdateVal]',
})
export class UpdateValDirective {
  constructor(el: ElementRef) {
    el.nativeElement.textContent = 'hii';
  }
}
