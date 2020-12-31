import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTimingsComponent } from './user-list-timings.component';

describe('UserListTimingsComponent', () => {
  let component: UserListTimingsComponent;
  let fixture: ComponentFixture<UserListTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
