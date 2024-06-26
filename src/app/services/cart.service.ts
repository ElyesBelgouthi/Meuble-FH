import { EventEmitter, Injectable } from '@angular/core';
import { ItemCart } from '../models/item-cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: ItemCart[] = [];
  cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  addToCart(product: ItemCart) {
    const itemIndex = this.cart.findIndex(
      (item) =>
        item.reference === product.reference &&
        item.color === product.color &&
        item.dimension === product.dimension
    );

    if (itemIndex !== -1) {
      this.cart[itemIndex].quantity += product.quantity;
      this.cart[itemIndex].price += product.price;
    } else {
      this.cart.push(
        new ItemCart(
          product.reference,
          product.title,
          product.quantity,
          product.color,
          product.dimension,
          product.price,
          product.priceUC,
          product.path,
          product.id
        )
      );
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartUpdated.emit(this.cart.length);
  }

  getCart() {
    return this.cart;
  }

  deleteCart() {
    localStorage.removeItem('cart');
    this.cartUpdated.emit(0);
  }

  deleteItemFromCart(itemId: number, color: string, dimension: string) {
    const itemIndex = this.cart.findIndex(
      (item) =>
        item.id === itemId &&
        item.color === color &&
        item.dimension === dimension
    );

    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.cartUpdated.emit(this.cart.length);
  }
  getCartSize(): number {
    if (this.cart) {
      return this.cart.length;
    } else return 0;
  }

  changeQuantity(index: number, value: number) {
    this.cart[index].quantity = value;
    this.cart[index].price = value * this.cart[index].priceUC;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartUpdated.emit(this.cart.length);
  }

  calcTotal(): number {
    if (this.cart && this.cart.length > 0) {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    } else {
      return 0;
    }
  }
}
