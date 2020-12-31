import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListBasicComponent } from './user-list-basic.component';

describe('UserListBasicComponent', () => {
  let component: UserListBasicComponent;
  let fixture: ComponentFixture<UserListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
