import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSideComponent } from './preview-side.component';

describe('PreviewSideComponent', () => {
  let component: PreviewSideComponent;
  let fixture: ComponentFixture<PreviewSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
