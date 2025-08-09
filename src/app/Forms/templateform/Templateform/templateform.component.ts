import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.scss',
})
export class TemplateformComponent {
  register(regData: NgForm) {
    console.log(regData.value, 'Form Data');
    console.log(regData.valid, 'Form Valid');
  }
}
