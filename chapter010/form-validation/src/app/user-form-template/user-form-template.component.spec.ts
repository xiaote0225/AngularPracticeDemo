import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTemplateComponent } from './user-form-template.component';

describe('UserFormTemplateComponent', () => {
  let component: UserFormTemplateComponent;
  let fixture: ComponentFixture<UserFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
