import { OrderItem } from './order-item.model';

export class Order {
  constructor(
    public id: number,
    public reference: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public totalPrice: number,
    public created_at: Date,
    public orderItems: OrderItem[]
  ) {}
}
