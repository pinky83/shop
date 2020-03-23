import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCartSelect]'
})
export class CartSelectionDirective {
  @HostBinding('style.color')
  color: string;
  @HostBinding('style.background')
  background: string;

  @HostListener('mouseover') newColor() {
    this.color = 'black';
    this.background = 'green';
  }

  @HostListener('mouseout') onMouseOut() {
    this.color = 'green';
    this.background = 'white';
  }
}
