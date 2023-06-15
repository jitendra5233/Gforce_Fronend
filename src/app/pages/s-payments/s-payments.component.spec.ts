import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPaymentsComponent } from './s-payments.component';

describe('SPaymentsComponent', () => {
  let component: SPaymentsComponent;
  let fixture: ComponentFixture<SPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
