import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceItemComponent } from './experience-item.component';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceItemComponent]
    });
    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
