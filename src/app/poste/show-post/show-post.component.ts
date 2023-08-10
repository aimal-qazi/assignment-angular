import { Component, OnInit } from '@angular/core';
import { Task3Service } from '../task3.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {
  poste = [
    {
      id: 1,
      title: 'His mother had always taught him',
      body: 'His mother had always taught him not to ever think of himself as better than others. He did tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
      userId: 9,
      tags: ['history', 'american', 'crime'],
      reactions: 2,
    },
  ];
  constructor(public service: Task3Service) {}

  ngOnInit(): void {}
}
