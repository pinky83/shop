import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(public productService: ProductService,
              public cartService: CartService) { }

  onBuy(event: Event) {
    this.cartService.updateCart(event as any);
    console.log('Product buying...complete!', event);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
