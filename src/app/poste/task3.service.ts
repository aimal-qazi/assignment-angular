import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task3Service {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://dummyjson.com/posts/1';
    return this.http.get(url);
  }
}
