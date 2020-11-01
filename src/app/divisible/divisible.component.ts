import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

  nombreElement: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  genererNombres(): void {

    let listeNombres = [];

    for (let i = 0; i < this.nombreElement; i++) {
      listeNombres.push(Math.floor(Math.random() * 2000) - 1000);
    }

    console.log(listeNombres);

  }

}
