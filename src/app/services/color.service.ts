import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Color } from '../models/color.model';

@Injectable({ providedIn: 'root' })
export class ColorService {
  private BaseURL: string = environment.API_URL;
  private jwtToken!: string | null;

  constructor(private http: HttpClient) {}

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.BaseURL + '/color');
  }

  getColorById(id: number): Observable<Color> {
    return this.http.get<Color>(this.BaseURL + '/color/' + id);
  }

  updateColor(id: number, formData: any): Observable<Color> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.patch<Color>(this.BaseURL + '/color/' + id, formData, {
      headers,
    });
  }

  addColor(formData: any): Observable<Color> {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    return this.http.post<Color>(this.BaseURL + '/color', formData, {
      headers,
    });
  }

  deleteColor(id: number): void {
    this.jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtToken}`, // Replace with your actual token
    });
    this.http.delete(this.BaseURL + '/color/' + id, { headers }).subscribe();
  }
}
