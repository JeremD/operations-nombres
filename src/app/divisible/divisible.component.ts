import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

  listNumber:number[];
  rangeNumber:number = (1000 - 1000) + -1000;

  constructor() { }

  ngOnInit(): void {
  }

  generateNumber(): void {
    let listeNombres = [];

    for (let i = 0; i < 5; i++) {
      listeNombres.push(Math.random() * this.rangeNumber);
    }

    console.log(listeNombres);

  }

}
