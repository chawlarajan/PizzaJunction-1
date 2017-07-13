export interface IOrdersViewModel {
    OrderId: number;
    CustomerInfo: string;
    DeliveryAddress: string;
    Distance: string;
    DeliveryMode: string;
    PaymentMode: string;
    DeliveryTime: string;
    NumberOfItems: number;
    TotalAmount: number;
    actions: string;
  }