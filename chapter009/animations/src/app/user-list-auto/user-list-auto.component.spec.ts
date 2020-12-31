import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAutoComponent } from './user-list-auto.component';

describe('UserListAutoComponent', () => {
  let component: UserListAutoComponent;
  let fixture: ComponentFixture<UserListAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
