import {Category} from './category.enum';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  shipping: string[];
  isAvailable: boolean;
}
