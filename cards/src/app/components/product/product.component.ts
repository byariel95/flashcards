import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    @Input() prod: Product;
    @Output() addedProduct: EventEmitter<any> = new EventEmitter(); // definir tipo de dato
     
    addCar() {
      console.log('se ha agregado');
      this.addedProduct.emit(this.prod.id);
    }
}