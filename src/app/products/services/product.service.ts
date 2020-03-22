import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {FoodModel} from '../models/food.model';
import {Category} from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductModel[] {
    return [
      new FoodModel(Category.FOOD, 'Soft bread', 1, 'Bread', 4, ['seller'], true),
      new FoodModel(Category.FOOD, 'Yellow butter', 2, 'Butter', 7, ['seller'], true),
      new FoodModel(Category.FOOD, 'Good cheese', 3, 'Cheese', 12, ['seller'], false),
      new FoodModel(Category.FOOD, 'Fresh milk', 4, 'Milk', 5, ['seller', 'delivery service'], true),
      new FoodModel(Category.FOOD, 'Yummy meat', 5, 'Meat', 15, ['seller'], false),
      new FoodModel(Category.FOOD, 'Excellent sandwich', 6, 'Sandwich', 7, ['seller', 'delivery service'], true),
      new FoodModel(Category.FOOD, 'Heck', 7, 'Frozen fish', 6, ['seller'], false),
      new FoodModel(Category.FOOD, 'Very cold and tasty', 8, 'Ice cream', 11, ['seller', 'delivery service'], true),
    ];
  }
}
