import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestViewCompComponent } from './dest-view-comp.component';

describe('DestViewCompComponent', () => {
  let component: DestViewCompComponent;
  let fixture: ComponentFixture<DestViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
