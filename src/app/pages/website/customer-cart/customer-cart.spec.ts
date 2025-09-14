import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCart } from './customer-cart';

describe('CustomerCart', () => {
  let component: CustomerCart;
  let fixture: ComponentFixture<CustomerCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
