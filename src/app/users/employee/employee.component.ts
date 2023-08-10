import { Component, OnInit } from '@angular/core';
import { Task2Service } from '../task2.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  person: any[] = [];
  constructor(public service: Task2Service) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      this.person = data;
      console.log(this.person);
    });
  }
}
