import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Color } from '../models/color.model';

@Injectable({ providedIn: 'root' })
export class ColorService {
  BaseURL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.BaseURL + '/color');
  }

  getColorById(id: number): Observable<Color> {
    return this.http.get<Color>(this.BaseURL + '/color/' + id);
  }

  updateColor(id: number, formData: any): Observable<Color> {
    return this.http.patch<Color>(this.BaseURL + '/color/' + id, formData);
  }

  addColor(formData: any): Observable<Color> {
    return this.http.post<Color>(this.BaseURL + '/color', formData);
  }

  deleteColor(id: number): void {
    this.http.delete(this.BaseURL + '/color/' + id).subscribe();
  }
}
