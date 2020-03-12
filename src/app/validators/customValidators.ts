import { FormControl } from '@angular/forms';

export class altValidators {
  static email(control: FormControl) {
    const format = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return control.value == '' || format.test(control.value) ?
      null : { email: { requiredFormat: format, actualValue: control.value } }
  }

  static phone(control: FormControl) {
    const format = /^[1]?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

    return control.value == '' || format.test(control.value) ?
      null : { phone: { requiredFormat: format, actualValue: control.value } }
  }

}

