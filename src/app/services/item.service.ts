import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export default class ItemService {
  items = [
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },

    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
  ];
  BaseURL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.BaseURL + '/item');
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.BaseURL + '/item/' + id);
  }

  updateItem(id: number, formData: any): Observable<Item> {
    return this.http.patch<Item>(this.BaseURL + '/item/' + id, formData);
  }

  addItem(formData: any): Observable<Item> {
    return this.http.post<Item>(this.BaseURL + '/item', formData);
  }

  deleteItem(id: number): void {
    this.http.delete(this.BaseURL + '/item/' + id).subscribe();
  }
}
