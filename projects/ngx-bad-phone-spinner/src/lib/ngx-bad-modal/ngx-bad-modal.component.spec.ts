import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBadModalComponent } from './ngx-bad-modal.component';

  describe('NgxBadModalComponent', () => {
  let component: NgxBadModalComponent;
  let fixture: ComponentFixture<NgxBadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
