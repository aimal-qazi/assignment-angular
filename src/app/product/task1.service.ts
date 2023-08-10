import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task1Service {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }
}
