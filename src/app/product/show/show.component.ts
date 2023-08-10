import { Component, OnInit } from '@angular/core';
import { Task1Service } from '../task1.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  product: any[] = [];
  side: any[] = [];
  constructor(public service: Task1Service) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      this.product = data.products;
      console.log('api response ', this.product);
    });
  }

  move1(index: any) {
    this.side.push(this.product[index]);
    this.product[index] = '';
  }
  move2(index: any) {
    this.product.push(this.side[index]);
    this.side[index] = '';
  }
}
