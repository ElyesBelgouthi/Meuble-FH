import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item-cart.model';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isCartEmpty: boolean = false;
  cartItems!: ItemCart[];
  imagesSrc: any = {};
  isLoading = true;
  p: number = 1;
  total: number = 0;

  constructor(
    private imageService: ImageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.cartService.cartUpdated.subscribe((size: number) => {
      this.isCartEmpty = size === 0 || !this.cartItems;
      this.calcTotal();
    });

    if (!this.cartItems || this.cartItems.length == 0) {
      this.isCartEmpty = true;
      this.isLoading = false;
    } else {
      this.calcTotal();
      const totalRequests = this.cartItems.length;
      let completedRequests = 0;

      for (let item of this.cartItems) {
        if (item && item.path) {
          this.imageService.getImage(item.path).subscribe(
            (imageData) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                this.imagesSrc[item.id] = e.target?.result;
                completedRequests++;

                if (completedRequests === totalRequests) {
                  this.isLoading = false; // Set isLoading to false when all requests are complete
                }
              };
              reader.readAsDataURL(imageData);
            },
            (error) => {
              completedRequests++;

              if (completedRequests === totalRequests) {
                this.isLoading = false; // Set isLoading to false when all requests are complete
              }
            }
          );
        }
      }
    }
  }

  calcTotal() {
    this.total = this.cartService.calcTotal();
  }

  deleteItemFromCart(itemId: number, color: string, dimension: string) {
    this.cartService.deleteItemFromCart(itemId, color, dimension);
    this.calcTotal();
  }

  changeQuantity(index: number, event: any) {
    const value: number = parseInt(event.target.value);
    this.cartService.changeQuantity(index, value);
  }
}
