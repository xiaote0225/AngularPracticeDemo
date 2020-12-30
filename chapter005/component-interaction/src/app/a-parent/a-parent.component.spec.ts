import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AParentComponent } from './a-parent.component';

describe('AParentComponent', () => {
  let component: AParentComponent;
  let fixture: ComponentFixture<AParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
