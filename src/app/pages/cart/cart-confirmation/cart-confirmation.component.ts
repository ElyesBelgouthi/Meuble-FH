// cart-confirmation.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemCart } from 'src/app/models/item-cart.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.css'],
})
export class CartConfirmationComponent implements OnInit {
  form!: FormGroup;
  cart!: ItemCart[];

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
      ]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\(\+216\))?\d{8}$/),
      ]),
    });
  }

  confirmOrder() {
    if (this.form.valid && this.cart && this.cart.length > 0) {
      const formData: FormData = new FormData();

      formData.append('email', this.form.value.email);
      formData.append('firstName', this.form.value.firstName);
      formData.append('lastName', this.form.value.lastName);
      formData.append('phoneNumber', this.form.value.phoneNumber);
      formData.append('cart', JSON.stringify(this.cart));

      console.log('FormData:', formData);
      this.orderService.addOrder(formData);
    }
    this.router.navigate(['/', 'cart']);
  }
}
