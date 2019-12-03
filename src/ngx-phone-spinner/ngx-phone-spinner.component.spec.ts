import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPhoneSpinnerComponent } from './ngx-phone-spinner.component';

describe('NgxBadPhoneSpinnerComponent', () => {
  let component: NgxPhoneSpinnerComponent;
  let fixture: ComponentFixture<NgxPhoneSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPhoneSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPhoneSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
