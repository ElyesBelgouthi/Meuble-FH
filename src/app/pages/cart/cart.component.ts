import { Component, OnInit } from '@angular/core';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isCartEmpty: boolean = true;
  cartItems!: any[];
  p: number = 1;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.cartItems = this.itemService.items;
  }
}
