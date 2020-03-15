import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {BuyedProductComponent} from './components/buyed-product/buyed-product.component';

@NgModule({
  declarations: [
    CartComponent,
    BuyedProductComponent
  ],
  exports: [
    CartComponent,
    BuyedProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
