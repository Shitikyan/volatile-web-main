import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeOperateWorldwideComponent } from './we-operate-worldwide.component';

describe('WeOperateWorldwideComponent', () => {
  let component: WeOperateWorldwideComponent;
  let fixture: ComponentFixture<WeOperateWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeOperateWorldwideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeOperateWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
