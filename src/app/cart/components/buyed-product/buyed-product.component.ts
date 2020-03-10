import {Component, Input, OnInit} from '@angular/core';
import {BuyedProductModel} from '../../models/buyed-product.model';

@Component({
  selector: 'app-buyed-product',
  templateUrl: './buyed-product.component.html',
  styleUrls: ['./buyed-product.component.css']
})
export class BuyedProductComponent implements OnInit {
  @Input() buyedProduct: BuyedProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
