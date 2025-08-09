import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.scss',
})
export class RegistrationformComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: this.formBuilder.group({
        houseno: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
    });
  }

  submitData() {
    console.log('Values: ', this.userForm.value);
  }

  // Applying validations from TS file using Getter-Setter
  get fnameForm() {
    return this.userForm.get('fname');
  }

  get lnameForm() {
    return this.userForm.get('lname');
  }

  get addressForm() {
    return this.userForm.get('address');
  }
}
