import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';
import { Product} from '../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total = 0;
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addecart(id: any){
    this.total += 1;
    console.log(id);
 }
}
