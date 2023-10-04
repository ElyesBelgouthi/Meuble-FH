export class OrderItem {
  constructor(
    public id: number,
    public reference: string,
    public title: string,
    public colorName: string,
    public unitPrice: number,
    public quantity: number,
    public totalPrice: number,
    public itemId: number
  ) {}
}
