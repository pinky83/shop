import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(public cartService: CartService) { }

  onBuy(event: Event) {
    this.cartService.updateCart(this.product);
    console.log('Product buying...complete!', event);
  }

  ngOnInit(): void {
  }

}
