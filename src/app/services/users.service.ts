import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../modules/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formFields: any[] = [
    {
      name: 'firstname',
      label: 'First name',
      type: 'text',
      validation: [
        {
          errorText: 'First name is <strong>required</strong>',
          errorTrigger(form: FormGroup) { 
            return form.controls.firstname.touched &&
              form.get('firstname').errors?.required 
          }
        },
        {
          errorText: 'Please provide a valid first name',
          errorTrigger(form: FormGroup) { 
            return form.controls.firstname.touched &&
            form.get('firstname').errors?.pattern 
          }
        }
      ]
    },
    {
      name: 'lastname',
      label: 'Last name',
      type: 'text',
      validation: [
        {
          errorText: 'Last name is <strong>required</strong>',
          errorTrigger(form: FormGroup) { 
            return form.controls.lastname.touched &&
              form.get('lastname').errors?.required 
          }
        },
        {
          errorText: 'Please provide a valid last name',
          errorTrigger(form: FormGroup) { 
            return form.controls.lastname.touched &&
            form.get('lastname').errors?.pattern 
          }
        }
      ]
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validation: [
        {
          errorText: 'Email is <strong>required</strong>',
          errorTrigger(form: FormGroup) { 
            return form.controls.email.touched &&
              form.get('email').errors?.required 
          }
        },
        {
          errorText: 'Please provide a valid email',
          errorTrigger(form: FormGroup) { 
            return form.controls.email.touched &&
            form.get('email').errors?.email 
          }
        }
      ]
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      validation: [
        {
          errorText: 'Phone is <strong>required</strong>',
          errorTrigger(form: FormGroup) { 
            return form.controls.phone.touched &&
              form.get('phone').errors?.required 
          }
        },
        {
          errorText: 'Please provide a valid phone',
          errorTrigger(form: FormGroup) { 
            return form.controls.phone.touched &&
            form.get('phone').errors?.phone 
          }
        }
      ]
    },
  ];

  private static url: string = '../../assets/emails.json';

  constructor(http: HttpClient) { }

 

  getFormFields() {
    return this.formFields;
  }
}
