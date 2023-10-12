import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private BaseURL: string = environment.API_URL;
  private jwtToken!: string | null;
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.get<Order[]>(this.BaseURL + '/order', { headers });
  }

  getOrderById(id: number): Observable<Order> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.get<Order>(this.BaseURL + '/order/' + id, { headers });
  }

  addOrder(formData: any): Observable<Order> {
    return this.http.post<Order>(this.BaseURL + '/order', formData);
  }

  deleteOrder(id: number) {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    this.http.delete(this.BaseURL + '/order/' + id, { headers }).subscribe();
  }
}
