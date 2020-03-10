import {BuyedProductModel} from './buyed-product.model';

export class CartModel {
  id: number;
  name: string;
  buyedProducts: BuyedProductModel[];
}
