import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItemComponent } from './language-item.component';

describe('LanguageItemComponent', () => {
  let component: LanguageItemComponent;
  let fixture: ComponentFixture<LanguageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageItemComponent]
    });
    fixture = TestBed.createComponent(LanguageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
