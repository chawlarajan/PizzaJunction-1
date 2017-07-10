import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { MenuItem, CartItem } from './../../shared/models/menuitem';
import { GSTAmount } from './../../shared/components/globals/global';

@Component({
    selector: 'order-summary',
    templateUrl: './ordersummary.component.html'
})
export class OrderSummaryComponent implements OnInit {
    @Input() cartDetails: CartItem;
    private deliveryFee: number = 0;
    private gstAmount: number = GSTAmount;
    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
    };

    clearCart = function () {
        this.storageService.clear();
        this.cartDetails = {};
        this.gstCharges = 0;
        this.deliveryFee = 0;
    }

    generateArray = function (menuItems: any): MenuItem[] {
        var arr = [];
        if (menuItems) {
            for (var id in menuItems.items) {
                arr.push(menuItems.items[id]);
            }
        }
        return arr;
    };
}
