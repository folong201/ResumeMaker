import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponentComponent } from './education-component.component';

describe('EducationComponentComponent', () => {
  let component: EducationComponentComponent;
  let fixture: ComponentFixture<EducationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponentComponent]
    });
    fixture = TestBed.createComponent(EducationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
