import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnglishOnly]'
})
export class EnglishOnlyDirective {

  constructor(private _el:ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z ]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
