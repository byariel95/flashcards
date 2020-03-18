import { Component } from '@angular/core';
import { Product } from '../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

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

}