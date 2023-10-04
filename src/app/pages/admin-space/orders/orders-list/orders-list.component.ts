import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  p: number = 1;
  orders!: Order[];
  searchText!: string;
  showConfirmDialog = false;
  confirmMessage = '';

  idToDelete!: number;
  indexToDelete!: number;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
  onSearch(event: any) {
    this.searchText = event.target?.value;
  }

  onDelete(id: number, reference: string, index: number, event: Event) {
    event.stopPropagation();
    this.confirmMessage = `Êtes-vous sûr de vouloir supprimer la commande "${reference}"?`;
    this.showConfirmDialog = true;
    this.idToDelete = id;
    this.indexToDelete = index;
  }

  confirmDelete() {
    this.orderService.deleteOrder(this.idToDelete);
    this.orders.splice(this.indexToDelete, 1);
    this.showConfirmDialog = false;
  }

  cancelDelete() {
    this.confirmMessage = '';
    this.showConfirmDialog = false;
    this.idToDelete = -1;
    this.indexToDelete = -1;
  }
}
