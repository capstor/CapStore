import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerLogRegComponent } from './mer-log-reg.component';

describe('MerLogRegComponent', () => {
  let component: MerLogRegComponent;
  let fixture: ComponentFixture<MerLogRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerLogRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerLogRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
