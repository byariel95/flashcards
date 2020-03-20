import { Component } from '@angular/core';
import { Product } from './product.model';

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
  total = 0;
  power = 10;
   products: Product[] = [
    {
      id: '1',
      image: 'assets/images/kisspng.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/kisspng.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/kisspng.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/kisspng.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/kisspng.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/kisspng.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  addName(name: string){
    this.nombres.push(name);
  }
  deleteName(index: number){
    this.nombres.splice(index, 1);
  }

  addecart(id: any){
     this.total += 1;
     console.log(id);
  }

}
