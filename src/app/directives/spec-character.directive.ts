import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecSymbols]',
})
export class SpecialCharacterDirective {

  regexStr = '^[а-яА-Яa-zA-Z ]*$';

  constructor(private el: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: Event) {
    setTimeout(() => {

      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^а-яА-ЯA-Za-z ]/g,
        '').replace(/\s/g, '');
      event.preventDefault();

    }, 100)
  }
}
