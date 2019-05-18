import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerComponent } from './view-mer.component';

describe('ViewMerComponent', () => {
  let component: ViewMerComponent;
  let fixture: ComponentFixture<ViewMerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
