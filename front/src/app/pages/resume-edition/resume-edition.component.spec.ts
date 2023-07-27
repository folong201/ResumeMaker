import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditionComponent } from './resume-edition.component';

describe('ResumeEditionComponent', () => {
  let component: ResumeEditionComponent;
  let fixture: ComponentFixture<ResumeEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditionComponent]
    });
    fixture = TestBed.createComponent(ResumeEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
