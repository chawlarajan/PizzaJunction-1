import { Component } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';

@Component({
    selector: 'order-summary',
    templateUrl: './ordersummary.component.html'
})
export class OrderSummaryComponent {
    private cartItems: any;
    constructor(private storageService: StorageService) {
        this.cartItems = this.storageService.read('cartItems');
    }
}
