export class ItemCart {
  constructor(
    public reference: string,
    public title: string,
    public quantity: number,
    public color: string,
    public price: number,
    public path: string,
    public id: number
  ) {}
}