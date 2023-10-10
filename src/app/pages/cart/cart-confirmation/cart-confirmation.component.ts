// cart-confirmation.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemCart } from 'src/app/models/item-cart.model';
import { Order } from 'src/app/models/order.model';
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
  showMailboxDialog = false;

  totalPrice: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.calcTotal();
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
      formData.append('totalPrice', String(this.totalPrice));
      formData.append('cart', JSON.stringify(this.cart));

      this.orderService.addOrder(formData).subscribe(
        (order: Order) => {
          this.showMailboxDialog = true;
          this.cartService.deleteCart();
        },
        (error) => {
          this.router.navigate(['/', 'cart']);
        }
      );
    }
  }
  closeMailboxDialog() {
    this.showMailboxDialog = false;
    this.router.navigate(['/', 'cart']);
  }
}
