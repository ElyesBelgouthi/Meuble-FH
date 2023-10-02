import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmationComponent } from './cart-confirmation.component';

describe('CartConfirmationComponent', () => {
  let component: CartConfirmationComponent;
  let fixture: ComponentFixture<CartConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartConfirmationComponent]
    });
    fixture = TestBed.createComponent(CartConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
