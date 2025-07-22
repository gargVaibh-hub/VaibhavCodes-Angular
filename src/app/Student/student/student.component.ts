import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.ShadowDom,
  // encapsulation: ViewEncapsulation.None
  // inputs: ['data'],      // can also be used a s a decorator @Input()
  outputs: ['childEvent'], // can also be used a s a decorator @Output()
})
export class StudentComponent {
  name: string = 'Vaibhav Garg';
  // data: any;
  // @Input() data: any; // INPUT property demonstration
  // @Input('Aliasing_sample_data') sample: any; // INPUT property with aliasing

  // OUTPUT property demonstration
  childEvent = new EventEmitter();
  sendData(outData: any) {
    this.childEvent.emit(outData);
  }
}
