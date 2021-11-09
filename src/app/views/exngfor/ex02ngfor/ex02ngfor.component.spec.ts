import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02ngforComponent } from './ex02ngfor.component';

describe('Ex02ngforComponent', () => {
  let component: Ex02ngforComponent;
  let fixture: ComponentFixture<Ex02ngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex02ngforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex02ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
