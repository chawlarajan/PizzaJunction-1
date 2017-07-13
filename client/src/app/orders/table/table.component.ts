 import { Component, OnInit } from '@angular/core';

import { IOrdersViewModel } from './orders.viewmodel';
import { OrderService } from './../order.service';
import { Order } from './../../shared/models/order';
import * as io from 'socket.io-client'

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [OrderService]  
})
export class TableComponent implements OnInit {
  private url: string = "http://localhost:3000";
  private socket: any;

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Order #', name: 'OrderId', sort: false},
    {title: 'Customer', name: 'CustomerInfo', sort: false},
    {title: 'Delivery Address', name: 'DeliveryAddress', sort: false},
    {title: 'Distance', name: 'Distance', sort: false},
    {title: 'Order Type', name: 'DeliveryMode', sort: false},
    {title: 'Payment Mode', name: 'PaymentMode', sort: false},
    {title: 'Delivery Time', name: 'DeliveryTime', sort: false},
    {title: '# Items', name: 'NumberOfItems', sort: false},
    {title: 'Amount', name: 'TotalAmount', sort: false},
    {title: 'Actions', name: 'actions'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data: IOrdersViewModel[] = [];

  public constructor(private orderService: OrderService) {}

  public ngOnInit():void {
    this.orderService.getPendingOrders()
    .then(this._onDataRecieved.bind(this));

    this.socket = io.connect(this.url,  {reconnection: true});

    this.socket.on('connect', function () {
      console.log('Connected!');
    });

    this.socket.on('disconnect', function() {
        console.log('disconnected');
    });

    this.socket.emit('pizza junction store', {
        message: "Joining Store from Pizza",
        username: "soctaste",
        store: 1234
    });

    this.socket.on('notifyStore', (data: any) => {
        if (data.orderId) {
          console.log(data.orderId);
          
          this.orderService.getOrderById(data.orderId)
           .then(this._onDataRecieved.bind(this));
        } else {
            console.log("There is a problem:", data);
        }
    });
  }

  private _onDataRecieved(orders: Order[]) {
    this.data = this.data.concat(this._transformData(orders));
    this.length = this.data.length;
    this.onChangeTable(this.config);
  }

  private _transformData(orders: Order[]): IOrdersViewModel[]  {
    return orders.map((order: Order) => {
      return  {
        OrderId: order.OrderId,
        CustomerInfo: order.CustomerName + "<br/>" + order.CustomerPhone,    
        DeliveryAddress: order.DeliveryAddress,
        Distance:  order.Distance || "",
        DeliveryMode:  order.DeliveryMode,
        PaymentMode:  order.PaymentMode,
        DeliveryTime:  order.DeliveryTime,
        NumberOfItems: order.NumberOfItems || 0,
        TotalAmount: order.OrderAmount,
        actions: '<button class="actionButton accept">ACCEPT</button> <button class="actionButton reject">REJECT</button>'
      }
    });
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}