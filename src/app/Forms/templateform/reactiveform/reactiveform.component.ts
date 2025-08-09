import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss',
})
export class ReactiveformComponent implements OnInit {
  sampleForm: FormGroup;
  arrayForm: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.sampleForm = new FormGroup({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobile: new FormControl(),
    // });

    // Can also be created using FormBuilder, but this needs an object initialization
    // this.sampleForm = this._formBuilder.group({
    //   id: new FormControl(''),
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl(''),
    //   mobile: new FormControl(''),
    //   // mobile: new FormControl(3787342683), // To show default value
    // });

    // Better standard code professionally
    this.sampleForm = this._formBuilder.group({
      id: [0],
      // fname: ['', Validators.required],
      // lname: ['', Validators.required],
      // email: ['', Validators.required],
      mobile: [''],

      /*FormArray Example*/
      mobilenos: new FormArray([new FormControl()]),

      // To add multiple validations
      fname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      lname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });

    /* ValueChanges() implementation starts*/

    // To track what value is changed in a field we use valueChanges()
    this.sampleForm.get('fname').valueChanges.subscribe((first) => {
      console.log('New value of fname:' + first);
    });

    // Can also check whole form
    // this.sampleForm.valueChanges.subscribe((formData) => {
    //   console.log('fname : ' + formData.fname);
    //   console.log('lname : ' + formData.lname);
    //   console.log('email : ' + formData.email);
    // });

    /* ValueChanges() implementation ends here*/

    /* StatusChanges() implementation starts*/
    this.sampleForm.get('fname').statusChanges.subscribe((fnameStatus) => {
      console.log('Status: ' + fnameStatus);
    });

    // Can also check whole form
    // this.sampleForm.statusChanges.subscribe((formDataStatus) => {
    //   console.log('form status : ' + formDataStatus);
    // });

    /* StatusChanges() implementation ends here*/

    this.arrayForm = this._formBuilder.group({
      id: [0],
      email: ['', [Validators.required, Validators.email]],
      /*FormArray Example*/
      mobilenos: new FormArray([new FormControl()]),
    });
  }

  submitData() {
    console.log(this.sampleForm.value);
    console.log(this.sampleForm.valid);

    //Get value of specific control of form
    console.log('First Name GET', this.sampleForm.get('fname').value);
  }

  resetForm() {
    // Full reset
    // this.sampleForm.reset();

    // Partial reset
    this.sampleForm.reset({
      fname: this.sampleForm.get('fname').value,
    });
  }

  // Using setValue and patchValue function to patch form values
  fillData() {
    // this.sampleForm.setValue({
    //   id: 1,
    //   fname: 'Vaibhav',
    //   lname: 'Garg',
    //   email: 'vg@gmail.com',
    //   mobile: 98787357,
    // });

    // PatchValue fills the form partially
    this.sampleForm.patchValue({
      id: 1,
      fname: 'Vaibhav',
      lname: 'Garg',
      // email: 'vg@gmail.com',
      mobile: 98787357,
    });
  }

  deleteNumber(id: any) {
    this.arrayForm.get('mobilenos').removeAt(id);
  }

  addNumber() {
    this.arrayForm.get('mobilenos').push(new FormControl());
  }
}
