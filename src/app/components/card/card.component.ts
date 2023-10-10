import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('item') item!: Item;
  @Input('src') src: any;
}
