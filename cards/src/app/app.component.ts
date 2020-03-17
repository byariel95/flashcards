import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  num1 = '';
  num2 = '';
  nombres = ['Ariel', 'jose ', 'miguel', 'pedro'];
  name = '';
  addName(name: string){
    this.nombres.push(name);
  }
  deleteName(index: number){
    this.nombres.splice(index, 1);
  }
}
