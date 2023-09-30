import { Injectable } from '@angular/core';
import { ItemCart } from '../models/item-cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: ItemCart[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  addToCart(product: ItemCart) {
    const itemIndex = this.cart.findIndex(
      (item) =>
        item.reference === product.reference && item.color === product.color
    );

    if (itemIndex !== -1) {
      this.cart[itemIndex].quantity += product.quantity;
      this.cart[itemIndex].price += product.price;
    } else {
      this.cart.push(
        new ItemCart(
          product.reference,
          product.title,
          1,
          product.color,
          product.price,
          product.path,
          product.id
        )
      );
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  deleteItemFromCart(itemId: number, color: string) {
    const itemIndex = this.cart.findIndex(
      (item) => item.id === itemId && item.color === color
    );

    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}