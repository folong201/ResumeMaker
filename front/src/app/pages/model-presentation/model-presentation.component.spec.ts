import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPresentationComponent } from './model-presentation.component';

describe('ModelPresentationComponent', () => {
  let component: ModelPresentationComponent;
  let fixture: ComponentFixture<ModelPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelPresentationComponent]
    });
    fixture = TestBed.createComponent(ModelPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
