import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {FoodModel} from '../../models/food.model';
import {Category} from '../../models/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel;

  constructor() { }

  onBuy(event: Event) {
    console.log('Product buying...complete!', event);
  }

  ngOnInit(): void {
    this.product = new FoodModel();
    this.product.id = 1;
    this.product.name = 'Cheese';
    this.product.description = 'Good quality cheese';
    this.product.price = 12;
    this.product.category = Category.FOOD;
    this.product.shipping = ['seller', 'pickup'];
  }

}
