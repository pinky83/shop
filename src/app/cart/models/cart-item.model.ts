import {CartModel} from './cart.model';

export class CartItemModel {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public quantity: number,
    public totalPrice: number
  ) {}
}
