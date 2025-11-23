import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-childof-student',
  templateUrl: './childof-student.component.html',
  styleUrl: './childof-student.component.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class ChildofStudentComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  name: string = 'Vaibhav Garg';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('OnInit called now!');
  }

  ngAfterContentInit() {
    console.log('ChildofStudentComponent comp');
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
    console.log('AfterViewInit called now!');
  }

  /* This hook is called multiple times whenever any change in component */
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called now!');
  }
}
