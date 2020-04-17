import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../../core/services/product/products.service';
import { Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total = 0;
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  addecart(id: any){
    this.total += 1;
    console.log(id);
 }
}
