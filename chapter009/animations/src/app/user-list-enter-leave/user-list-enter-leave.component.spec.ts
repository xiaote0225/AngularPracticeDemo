import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListEnterLeaveComponent } from './user-list-enter-leave.component';

describe('UserListEnterLeaveComponent', () => {
  let component: UserListEnterLeaveComponent;
  let fixture: ComponentFixture<UserListEnterLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListEnterLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListEnterLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
