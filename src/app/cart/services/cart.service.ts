import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {CartModel} from '../models/cart.model';
import {BuyedProductModel} from '../models/buyed-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel;

  constructor() {
    this.cart = new CartModel();
    this.cart.name = 'List of purchased products';
    this.cart.buyedProducts = [new BuyedProductModel(0, '', '', 0, 0)];
  }

  updateCart(product: ProductModel) {
    let  item = this.cart.buyedProducts.find(buyedProduct => buyedProduct.id === product.id);
    if (item != null) {
      item.quantity += 1;
      item.totalPrice += product.price;
    } else {
      item =  new BuyedProductModel(product.id, product.name, product.description, 0, 0);
      this.cart.buyedProducts.concat(item);
    }
  }

  getCart() {
    return this.cart;
  }

  getProducts(): BuyedProductModel[] {
    return this.cart.buyedProducts;
  }
}
