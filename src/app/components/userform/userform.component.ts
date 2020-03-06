import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { altValidators } from '../../validators/customValidators';

import { User } from '../../modules/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    avatar: null
  }
  formFields: Array<any>;
  userForm: FormGroup;
  countries = [
    '',
    'Australia',
    'Argentina',
    'Dominican Republic',
    'Japan',
    'Mexico',
    'Spain',
    'United States',
    'United Kingdom',
    'Venezuela'
  ];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.formFields = this.usersService.getFormFields();
    this.userForm = this.creatFormGroup();
  }

  creatFormGroup() {
    return new FormGroup({
      firstname: new FormControl(
        this.user.firstname,
        [Validators.required, Validators.pattern(/^[A-zÀ-ú\s]+$/)]
      ),
      lastname: new FormControl(
        this.user.lastname,
        [Validators.required, Validators.pattern(/^[A-zÀ-ú\s]+$/)]
      ),
      email: new FormControl(
        this.user.email, [Validators.required, altValidators.email]
      ),
      phone: new FormControl(
        this.user.phone, [Validators.required, altValidators.phone]
      ),
      country: new FormControl('', Validators.required)
    });
  }

  get firstname() {
    return this.userForm.controls.firstname;
  }
  get lastname() {
    return this.userForm.controls.lastname;
  }
  get email() {
    return this.userForm.controls.email;
  }
  get phone() {
    return this.userForm.controls.phone;
  }
  get country() {
    return this.userForm.controls.country;
  }

  setCountry(option: string) {
    this.country.setValue(option.trim(), {emitEvent: false});
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
