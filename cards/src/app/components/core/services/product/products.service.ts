import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/kisspng.png',
      title: 'Camiseta',
      price: 50000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/kisspng.png',
      title: 'Hoodie',
      price: 90000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/kisspng.png',
      title: 'Mug',
      price: 10000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/kisspng.png',
      title: 'Pin',
      price: 30000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/kisspng.png',
      title: 'Stickers',
      price: 20000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/kisspng.png',
      title: 'Stickers',
      price: 50000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}

