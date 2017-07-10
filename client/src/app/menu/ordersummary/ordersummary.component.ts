import { Component } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { MenuItem, CartItem } from './../../shared/models/menuitem';
import { GSTAmount } from './../../shared/components/globals/global';

@Component({
    selector: 'order-summary',
    templateUrl: './ordersummary.component.html'
})
export class OrderSummaryComponent {
    private cartItems: MenuItem[];
    private subTotal: number = 0;      // calculate by iterating all items in carItems
    private deliveryFee: number = 0;
    private gstCharges: number = 0;
    private gstAmount: number = GSTAmount;
    constructor(private storageService: StorageService) {
        this.bindCart();
    }

    bindCart = function () {
        let items = <CartItem>this.storageService.read('cartItems');
        if (items) {
            this.cartItems = this.generateArray(items);
            this.subTotal = items.totalPrice;
            this.gstCharges = this.gstAmount*this.subTotal/100;
        }
    }

    clearCart = function () {
        this.storageService.clear();
        this.cartItems = {};
        this.subTotal = 0;

    }

    generateArray = function (menuItems: any): MenuItem[] {
        var arr = [];
        for (var id in menuItems.items) {
            arr.push(menuItems.items[id]);
        }
        return arr;
    };
}
