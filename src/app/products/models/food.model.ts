import {ProductModel} from './product.model';
import {Category} from './category.enum';

export class FoodModel implements ProductModel {
  category: Category;
  description: string;
  id: number;
  name: string;
  price: number;
  shipping: string[];
}
