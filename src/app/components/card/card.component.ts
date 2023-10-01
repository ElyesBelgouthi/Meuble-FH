import { Component, Input } from '@angular/core';
import { ItemCart } from 'src/app/models/item-cart.model';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('item') item!: Item;
  @Input('src') src: any;

  constructor(private cartService: CartService) {}
  addToCart(event: any) {
    event.stopPropagation();
    console.log(this.item);
    this.cartService.addToCart(
      new ItemCart(
        this.item.reference,
        this.item.title,

        1,
        '',
        this.item.price,
        this.item.photos[0].path,
        this.item.id
      )
    );
  }
}
