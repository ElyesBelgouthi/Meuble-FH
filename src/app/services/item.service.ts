import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Item } from '../models/item.model';
import { Params } from '@angular/router';

@Injectable({ providedIn: 'root' })
export default class ItemService {
  private BaseURL: string = environment.API_URL;
  private jwtToken!: string | null;

  constructor(private http: HttpClient) {}

  getItems(params: Params): Observable<Item[]> {
    return this.http.get<Item[]>(this.BaseURL + '/item', { params });
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.BaseURL + '/item/' + id);
  }

  updateItem(id: number, formData: any): Observable<Item> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.patch<Item>(this.BaseURL + '/item/' + id, formData, {
      headers,
    });
  }

  addItem(formData: any): Observable<Item> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.post<Item>(this.BaseURL + '/item', formData, { headers });
  }

  deleteItem(id: number): void {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    this.http.delete(this.BaseURL + '/item/' + id, { headers }).subscribe();
  }
}
