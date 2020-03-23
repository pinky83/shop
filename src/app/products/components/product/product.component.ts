import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() purchase: EventEmitter<any> = new EventEmitter<any>();

  receiveProduct() {
    this.purchase.emit(this.product);
  }
}
