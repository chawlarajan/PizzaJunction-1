export class Order {
    OrderId: number;
    OrderStatusId: number;
    DeliveryMode: string;
    PaymentMode: string;
    DeliveryAddress: string;
    Distance: string;
    OrderAmount: number;
    CustomerName: string;
    PreviousOrders: number;
    CustomerPhone: string;
    NumberOfItems: number;
    OrderDate: Date;
    DeliveryTime: string;
}

export enum OrderStatus {
    Accepted = 1,
    Rejected = 2,
    Completed = 3
}