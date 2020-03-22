import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {CartModel} from '../models/cart.model';
import {CartItemModel} from '../models/cart-item.model';
import {ProductService} from '../../products/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel;

  constructor(public productService: ProductService) {
    this.cart = new CartModel();
    this.cart.name = 'List of purchased products';
    this.cart.buyedProducts = [];
  }

  addItem(product: ProductModel) {
    let  item = this.cart.buyedProducts.find(buyedProduct => buyedProduct.id === product.id);
    if (item != null) {
      item.quantity++;
      item.totalPrice += product.price;
    } else {
      item =  new CartItemModel(product.id, product.name, product.description, 1, product.price);
      this.cart.buyedProducts.push(item);
    }
  }

  updateItem(event: any) {
    const  item = this.cart.buyedProducts.find(buyedProduct => buyedProduct.id === event.id);
    if (item != null) {
      this.updateItemList(event.operation, item);
    }
  }

  getCart() {
    return this.cart;
  }

  getProducts(): CartItemModel[] {
    return this.cart.buyedProducts;
  }

  private updateItemList(operation: number, item: CartItemModel) {
    switch (operation) {
      case 1: {
        item.quantity += 1;
        break;
      }
      case -1: {
        item.quantity -= 1;
        break;
      }
      case 0: {
        item.quantity = 0;
        break;
      }
    }
    if (item.quantity > 0) {
      const price = this.productService.getProducts().find(prod => prod.id === item.id).price;
      operation > 0 ? item.totalPrice += price : item.totalPrice -= price;
    } else {
      const index = this.cart.buyedProducts.indexOf(item, 0);
      if (index > -1) {
        this.cart.buyedProducts.splice(index, 1);
      }
    }
  }
}
