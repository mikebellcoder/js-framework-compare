import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `
    <div class="board-row">
      <square [value]="squares[0]" (click)="handleClick(0)" ></square>
      <square [value]="squares[1]" (click)="handleClick(1)"></square>
      <square [value]="squares[2]" (click)="handleClick(2)"></square>
    </div>
    <div class="board-row">
      <square [value]="squares[3]" (click)="handleClick(3)"></square>
      <square [value]="squares[4]" (click)="handleClick(4)"></square>
      <square [value]="squares[5]" (click)="handleClick(5)"></square>
    </div>
    <div class="board-row">
      <square [value]="squares[6]" (click)="handleClick(6)"></square>
      <square [value]="squares[7]" (click)="handleClick(7)"></square>
      <square [value]="squares[8]" (click)="handleClick(8)"></square>
    </div>
  `,
  styles: [],
})
export class BoardComponent {
  squares: Array<null|string> = Array(9).fill(null);

  handleClick(i: number) {
    const nextSquare = this.squares.slice();
    nextSquare[i] = 'X';
    this.squares = new Array(...nextSquare);
  }
}
