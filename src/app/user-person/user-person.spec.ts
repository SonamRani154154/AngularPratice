import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerson } from './user-person';

describe('UserPerson', () => {
  let component: UserPerson;
  let fixture: ComponentFixture<UserPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
