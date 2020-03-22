import { CartModel } from './cart.model';

export class BuyedProductModel {
  // id: number;
  // name: string;
  // description: string;
  // quantity: number;
  // totalPrice: number;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public quantity: number,
    public totalPrice: number
  ) {
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.quantity = quantity;
    // this.totalPrice = totalPrice;
  }
}
