import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../../core/services/product/products.service';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.scss']
})
export class InventaryComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(){
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(response =>{
     if (response) {
      this.getListProducts();
     } else {
       console.error('unable product');
     }
    });
  }

}
