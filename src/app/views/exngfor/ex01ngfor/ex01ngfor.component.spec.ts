import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01ngforComponent } from './ex01ngfor.component';

describe('Ex01ngforComponent', () => {
  let component: Ex01ngforComponent;
  let fixture: ComponentFixture<Ex01ngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01ngforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex01ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
