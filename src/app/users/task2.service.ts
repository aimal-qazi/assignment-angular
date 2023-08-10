import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task2Service {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
}
