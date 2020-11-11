import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiplicatif',
  templateUrl: './multiplicatif.component.html',
  styleUrls: ['./multiplicatif.component.css']
})
export class MultiplicatifComponent implements OnInit {

  faTimes = faTimes;
  resultatMultiplication: number;

  // nombreRequis = new FormControl ('', [Validators.number]);

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Multiplier deux nombres
   *
   * @param {number} nombre1
   * @param {number} nombre2
   * @returns {number}
   * @memberof MultiplicatifComponent
   */
  multiplierNombres(nombre1: number, nombre2: number): number {
    return this.resultatMultiplication = nombre1 * nombre2;
  }

}
