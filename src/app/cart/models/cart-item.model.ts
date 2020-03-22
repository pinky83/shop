export class CartItemModel {
  id: number;
  name: string;
  description: string;
  quantity: number;
  totalPrice: number;

  constructor(id: number, name: string, description: string, quantity: number, totalPrice: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
