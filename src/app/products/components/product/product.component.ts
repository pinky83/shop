import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() { }

  onBuy(event: Event) {
    console.log('Product buying...complete!', event);
  }

  ngOnInit(): void {
  }

}
