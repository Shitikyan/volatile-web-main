import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSecondaryComponent } from './text-secondary.component';

describe('TextSecondaryComponent', () => {
  let component: TextSecondaryComponent;
  let fixture: ComponentFixture<TextSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
