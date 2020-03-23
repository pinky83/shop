import {ProductModel} from './product.model';
import {Category} from './category.enum';

export class FoodModel implements ProductModel {
  constructor(
    public category: Category,
    public description: string,
    public id: number,
    public name: string,
    public price: number,
    public shipping: string[],
    public isAvailable: boolean
  ) {}
}
