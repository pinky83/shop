import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from './components/cart/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
