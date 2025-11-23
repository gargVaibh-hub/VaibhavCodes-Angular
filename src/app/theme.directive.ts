import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.color = 'purple';
    elRef.nativeElement.style.fontSize = '40px';
  }
}
