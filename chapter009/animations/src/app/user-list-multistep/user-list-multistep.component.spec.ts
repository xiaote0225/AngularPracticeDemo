import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMultistepComponent } from './user-list-multistep.component';

describe('UserListMultistepComponent', () => {
  let component: UserListMultistepComponent;
  let fixture: ComponentFixture<UserListMultistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListMultistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListMultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
