import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceViewCompComponent } from './source-view-comp.component';

describe('SourceViewCompComponent', () => {
  let component: SourceViewCompComponent;
  let fixture: ComponentFixture<SourceViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
