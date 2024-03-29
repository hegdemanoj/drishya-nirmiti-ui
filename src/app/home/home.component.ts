import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 6, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 3, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 3, color: '#DDBDF1' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
