import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBirhtdayComponent } from './user-birhtday.component';

describe('UserBirhtdayComponent', () => {
  let component: UserBirhtdayComponent;
  let fixture: ComponentFixture<UserBirhtdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBirhtdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBirhtdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
