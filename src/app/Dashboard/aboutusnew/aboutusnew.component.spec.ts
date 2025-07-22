import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusnewComponent } from './aboutusnew.component';

describe('AboutusnewComponent', () => {
  let component: AboutusnewComponent;
  let fixture: ComponentFixture<AboutusnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutusnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutusnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
