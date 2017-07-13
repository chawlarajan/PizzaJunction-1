import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { apiPath } from './../shared/components/globals/global';
import { Order } from './../shared/models/order';

@Injectable()
export class OrderService {
    constructor(private http: Http) {       
    }

    getPendingOrders(): Promise<Order[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('date', '07/07/2017');

        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        return this.http.get(apiPath + 'Orders/getOrders', requestOptions)
            .map((res: Response) => res.json())
            .toPromise()
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    getOrderById(id: number): Promise<Order> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());

        let requestOptions = new RequestOptions();
        requestOptions.params = params;

        return this.http.get(apiPath + 'Orders/getOrderById', requestOptions)
            .map((res: Response) => res.json())
            .toPromise()
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }
}
