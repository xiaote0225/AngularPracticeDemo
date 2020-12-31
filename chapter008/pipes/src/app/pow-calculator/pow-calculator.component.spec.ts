import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowCalculatorComponent } from './pow-calculator.component';

describe('PowCalculatorComponent', () => {
  let component: PowCalculatorComponent;
  let fixture: ComponentFixture<PowCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
