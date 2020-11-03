import { Component, OnInit } from '@angular/core';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-divisible',
  templateUrl: './divisible.component.html',
  styleUrls: ['./divisible.component.css']
})
export class DivisibleComponent implements OnInit {

  faDivide = faDivide;
  listSize = 5;
  listeNombres: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Générer des nombres entre -1000 et 1000
   *
   * @returns {*}
   * @memberof DivisibleComponent
   */
  genererNombres(): any {
    for (let i = 0; i < this.listSize; i++) {
      this.listeNombres.push(Math.floor(Math.random() * 2000) - 1000);
    }
  }

  /**
   * Rafraichir la liste une fois les nombres générés
   *
   * @param {number[]} arrayNumbers
   * @returns {*}
   * @memberof DivisibleComponent
   */
  viderListe(arrayNumbers: number[]): any {
    while (arrayNumbers.length) {
      arrayNumbers.pop();
    }
  }

  /**
   * Vérifier si nombre divisible par 3, 5 ou les deux
   *
   * @param {number} nombre
   * @returns {*}
   * @memberof DivisibleComponent
   */
  diviserNombre(nombre: number): any {
    if (nombre % 3 === 0 && nombre % 5 === 0) {
      this.viderListe(this.listeNombres);
      return 'Gestform';
    }
    else if (nombre % 3 === 0) {
      this.viderListe(this.listeNombres);
      return 'Geste';
    }
    else if (nombre % 5 === 0) {
      this.viderListe(this.listeNombres);
      return 'Forme';
    }
    else {
      this.viderListe(this.listeNombres);
      return nombre;
    }
  }

}
