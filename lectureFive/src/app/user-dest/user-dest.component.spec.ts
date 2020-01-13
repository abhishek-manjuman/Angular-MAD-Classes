import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDestComponent } from './user-dest.component';

describe('UserDestComponent', () => {
  let component: UserDestComponent;
  let fixture: ComponentFixture<UserDestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
