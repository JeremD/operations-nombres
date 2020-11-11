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

  nombre1Requis = new FormControl('', [Validators.pattern('^[0-9]*$')]);
  nombre2Requis = new FormControl('', [Validators.pattern('^[0-9]*$')]);

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

  getErrorMessage(inputError: FormControl) {
    return inputError.hasError('pattern') ? 'Nombre invalide' : '';
  }

}
