import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestCompComponent } from './dest-comp.component';

describe('DestCompComponent', () => {
  let component: DestCompComponent;
  let fixture: ComponentFixture<DestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
