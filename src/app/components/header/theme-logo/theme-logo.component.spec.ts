import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLogoComponent } from './theme-logo.component';

describe('ThemeLogoComponent', () => {
  let component: ThemeLogoComponent;
  let fixture: ComponentFixture<ThemeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
