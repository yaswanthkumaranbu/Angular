import { Component } from '@angular/core';
import { addNumbers } from './add-numbers';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  sum: number;

  constructor() {
    this.sum = addNumbers(10, 20);
 }
 
}