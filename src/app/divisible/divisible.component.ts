import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

  nombresElement = 5;
  listeNombres: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  genererNombres(): any {

    for (let i = 0; i < this.nombresElement; i++) {
      this.listeNombres.push(Math.floor(Math.random() * 2000) - 1000);
    }
  }

  // effacerNombres(Numbers: number[]): any {
  //   while (Numbers.length) {
  //     Numbers.pop();
  //   }
  // }

}
