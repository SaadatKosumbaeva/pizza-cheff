import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

import { REGEX } from '../constants';

export const phoneValidator = (control: AbstractControl): ValidationErrors | null => {
  const validNumber = REGEX.phone.test(control.value);
  if (validNumber) {
    return null;
  }
  return { phone: true };
}

@Directive({
  selector: '[appPhone]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatePhoneDirective,
    multi: true
  }]
})
export class ValidatePhoneDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator(control);
  }
}
