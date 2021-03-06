import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCompComponent } from './source-comp.component';

describe('SourceCompComponent', () => {
  let component: SourceCompComponent;
  let fixture: ComponentFixture<SourceCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
