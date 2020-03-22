import { ProductModel } from './product.model';
import { Category } from './category.enum';

export class FoodModel implements ProductModel {
  // category: Category;
  // description: string;
  // id: number;
  // name: string;
  // price: number;
  // shipping: string[];

  constructor(
    public category: Category,
    public description: string,
    public id: number,
    public name: string,
    public price: number,
    public shipping: string[]
  ) {
    // this.category = category;
    // this.description = description;
    // this.id = id;
    // this.name = name;
    // this.price = price;
    // this.shipping = shipping;
  }
}
