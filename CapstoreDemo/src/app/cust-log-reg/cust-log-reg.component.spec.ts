import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLogRegComponent } from './cust-log-reg.component';

describe('CustLogRegComponent', () => {
  let component: CustLogRegComponent;
  let fixture: ComponentFixture<CustLogRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustLogRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLogRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
