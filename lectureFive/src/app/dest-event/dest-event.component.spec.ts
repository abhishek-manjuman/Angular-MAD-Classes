import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestEventComponent } from './dest-event.component';

describe('DestEventComponent', () => {
  let component: DestEventComponent;
  let fixture: ComponentFixture<DestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
