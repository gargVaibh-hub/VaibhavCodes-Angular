import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  ContentChild,
  OnInit,
} from '@angular/core';
import { ChildofStudentComponent } from '../../ChildOfStudent/childof-student/childof-student.component';

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
export class StudentComponent implements OnChanges, AfterContentInit, OnInit {
  name: string = 'Vaibhav Garg';
  // data: any;
  @Input() data: any; // INPUT property demonstration
  // @Input('Aliasing_sample_data') sample: any; // INPUT property with aliasing

  // OUTPUT property demonstration
  childEvent = new EventEmitter();
  sendData(outData: any) {
    this.childEvent.emit(outData);
  }

  ngOnChanges(changes: any): void {
    console.log('Input at Parent is changed : ', changes);
  }

  // Through ContentChild the Student comp gets access of its Child comp.
  @ContentChild(ChildofStudentComponent)
  childofStudent1: ChildofStudentComponent;

  /* This lifecycle hook is necessary as the "childofStudent" object can be accessed only here 
  and nowhere else. */
  ngAfterContentInit() {
    console.log('Student comp');

    // Paremt comp can also alter the child's properties through this.
    // this.childofStudent1.name = 'Shubham Bhatt';
    // console.log(this.childofStudent1.name);
  }

  /* Allow the instance to be accessible in other lifecycle hooks, like OnInit
   However, Angular says this forced accession is not recommended */
  // @ContentChild(ChildofStudentComponent, { static: true })
  // childofStudent1: ChildofStudentComponent;

  ngOnInit(): void {
    // Paremt comp can also alter the child's properties through this.
    // this.childofStudent1.name = 'Rahul Pal';
    // console.log(this.childofStudent1.name);
  }
}
