import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appInputRestriction]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ExcludeSpecSymbolsDirective,
    multi: true
  }]
})
export class ExcludeSpecSymbolsDirective {
  inputElement: ElementRef;

  cyrillicRegex = '[\u0401\u0451\u0410-\u044f]';

  constructor(el: ElementRef) {
    this.inputElement = el;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    this.noSpecialChars(event);
  }

  noSpecialChars(event: any) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }
    let k;
    k = event.keyCode;
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
      return;
    }
    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(this.cyrillicRegex);
    if (regEx.test(ch)) {
      return;
    }
    e.preventDefault();
  }

  @HostListener('paste', ['$event']) onPaste(event: any) {
    let regex = /[a-zA-Z\u0401\u0451\u0410-\u044f]/g;

    const e = <ClipboardEvent>event;
    if (!e.clipboardData) return;
    const pasteData = e.clipboardData.getData('text/plain');
    let m;
    let matches = 0;
    while ((m = regex.exec(pasteData)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      m.forEach(() => {
        matches++;
      });
    }
    if (matches === pasteData.length) {
      return;
    } else {
      e.preventDefault();
    }
  }
}
