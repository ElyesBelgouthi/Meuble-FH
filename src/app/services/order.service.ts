import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {
  BaseURL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  addOrder(formData: any) {
    this.http.post(this.BaseURL + '/order', formData).subscribe();
  }
}
