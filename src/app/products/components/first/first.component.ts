import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  variants: string[];
  shippingType: string[];

  constructor() { }

  ngOnInit(): void {
    this.name = 'First Component';
    this.description = 'This is a first component of my project...';
    this.price = 7;
    this.category = Category.CLEANERS;
    this.isAvailable = true;
    this.variants = ['basic', 'premium', 'luxury'];
    this.shippingType = ['pickup', 'seller', 'delivery service'];
  }

}
