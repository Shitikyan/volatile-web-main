import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsThingsComponent } from './about-us-things.component';

describe('AboutUsThingsComponent', () => {
  let component: AboutUsThingsComponent;
  let fixture: ComponentFixture<AboutUsThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsThingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
