import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductsService} from '../../../core/services/product/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor( private route: ActivatedRoute , private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string ) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.product = data;
    });
  }
  createProduct() {
    const newProduct: Product = {
      id: '24',
      title: 'camisa desde miservice',
      image: 'assets/images/camiseta.png',
      price: 4500,
      description: 'este es un nuevo producto'
    };

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    });
  }

  updateProduct() {
    const modifiedProduct: Partial<Product> = {
      price: 4500,
      description: 'producto actualizado'
    };

    this.productsService.updateProduct('123', modifiedProduct).subscribe(data => {
      console.log(data);
    });
  }
  deleteProduct() {
    this.productsService.deleteProduct('123').subscribe(data => {
      console.log(data);
    });
  }

}
