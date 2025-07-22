import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildofStudentComponent } from './childof-student.component';

describe('ChildofStudentComponent', () => {
  let component: ChildofStudentComponent;
  let fixture: ComponentFixture<ChildofStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildofStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildofStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
