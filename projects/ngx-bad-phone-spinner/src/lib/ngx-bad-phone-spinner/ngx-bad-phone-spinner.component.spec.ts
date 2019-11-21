import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBadPhoneSpinnerComponent } from './ngx-bad-phone-spinner.component';

describe('NgxBadPhoneSpinnerComponent', () => {
  let component: NgxBadPhoneSpinnerComponent;
  let fixture: ComponentFixture<NgxBadPhoneSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBadPhoneSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBadPhoneSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
