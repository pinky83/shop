import {CartItemModel} from './cart-item.model';

export class CartModel {
  id: number;
  name: string;
  buyedProducts: CartItemModel[];
}
