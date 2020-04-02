import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'store';
  num1 = '';
  num2 = '';
  nombres = ['Ariel', 'jose ', 'miguel', 'pedro'];
  name = '';
  power = 10;
  total = 0;

  ngOnInit(): void {
  }

  addName(name: string){
    this.nombres.push(name);
  }
  deleteName(index: number){
    this.nombres.splice(index, 1);
  }
}
