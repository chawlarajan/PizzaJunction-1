import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Globals } from './../../shared/components/globals/global';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private cartDetails: CartItem;
    private deliveryFee: number = 0;

    constructor(private storageService: StorageService, private globals: Globals) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryFee = 0;
    }
}
