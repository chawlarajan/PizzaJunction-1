import { Component } from '@angular/core';
import { CartItem } from './../shared/models/menuitem';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    cartItem: CartItem;
    onCartChange = function(cartItem: CartItem){
        this.cartItem = cartItem;
    };
}
