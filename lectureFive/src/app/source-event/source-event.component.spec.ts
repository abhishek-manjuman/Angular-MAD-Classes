import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceEventComponent } from './source-event.component';

describe('SourceEventComponent', () => {
  let component: SourceEventComponent;
  let fixture: ComponentFixture<SourceEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
