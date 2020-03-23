import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartSelectionDirective} from './directives/cart.selection.directive';


@NgModule({
  declarations: [CartSelectionDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CartSelectionDirective
  ]
})
export class SharedModule {
}
