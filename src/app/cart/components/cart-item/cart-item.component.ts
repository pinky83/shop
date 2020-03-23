import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-buyed-product',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() operation: EventEmitter<any> = new EventEmitter<any>();
  @Input() itemModel: CartItemModel;

  increaseQty() {
    this.operation.emit({id: this.itemModel.id, operation: 1});
  }

  decreaseQty() {
    this.operation.emit({id: this.itemModel.id, operation: -1});
  }

  remove() {
    this.operation.emit({id: this.itemModel.id, operation: 0});
  }

  ngOnInit(): void {
  }
}
