import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListGroupsComponent } from './user-list-groups.component';

describe('UserListGroupsComponent', () => {
  let component: UserListGroupsComponent;
  let fixture: ComponentFixture<UserListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
