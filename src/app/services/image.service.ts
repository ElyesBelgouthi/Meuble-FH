import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  BaseURL: string = environment.API_URL;

  getImage(path: string): Observable<Blob> {
    return this.http.get(this.BaseURL + '/image/' + path, {
      responseType: 'blob',
    });
  }
}
