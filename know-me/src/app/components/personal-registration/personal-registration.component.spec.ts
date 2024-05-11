import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRegistrationComponent } from './personal-registration.component';

describe('PersonalRegistrationComponent', () => {
  let component: PersonalRegistrationComponent;
  let fixture: ComponentFixture<PersonalRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalRegistrationComponent]
    });
    fixture = TestBed.createComponent(PersonalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
