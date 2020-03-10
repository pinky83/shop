import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartModel} from '../../models/cart.model';
import {BuyedProductModel} from '../../models/buyed-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyedProducts: BuyedProductModel[];
  cart: CartModel;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.buyedProducts = this.cartService.getProducts();
  }

}
