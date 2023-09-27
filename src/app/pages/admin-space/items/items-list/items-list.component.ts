import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  p: number = 1;
  items!: any[];
  searchText!: string;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.itemService.getItems().subscribe((items: Item[]) => {
    //   this.items = items;
    // });
    this.items = this.itemService.items;
  }
  onSearch(event: any) {
    this.searchText = event.target?.value;
  }

  onDelete(id: number, index: number, event: Event) {
    event.stopPropagation();
    this.itemService.deleteItem(id);
    this.items.splice(index, 1);
  }
}
