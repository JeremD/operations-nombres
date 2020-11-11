import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiplicatif',
  templateUrl: './multiplicatif.component.html',
  styleUrls: ['./multiplicatif.component.css']
})
export class MultiplicatifComponent implements OnInit {

  faTimes = faTimes;
  number1: number;
  number2: number;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Multiplier deux nombres
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @memberof MultiplicatifComponent
   */
  multiplierNombres(a: number, b: number): number {
    return a * b;
  }

}
