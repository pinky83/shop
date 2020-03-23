import {CartModel} from './cart.model';

export class BuyedProductModel {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public quantity: number,
    public totalPrice: number
  ) {}
}
