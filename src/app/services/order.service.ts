import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  BaseURL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.BaseURL + '/order');
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.BaseURL + '/order/' + id);
  }

  addOrder(formData: any): Observable<Order> {
    return this.http.post<Order>(this.BaseURL + '/order', formData);
  }

  deleteOrder(id: number) {
    this.http.delete(this.BaseURL + '/order/' + id);
  }
}
