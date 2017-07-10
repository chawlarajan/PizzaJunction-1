import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../../shared/models/menuitem';
import { StorageService } from './../../shared/services/storage.service';

@Component({
    selector: 'menu-items',
    templateUrl: './menuitems.component.html',
    providers: [StorageService]
})
export class MenuItemsComponent implements OnInit {
    private menuItems: MenuItem[];
    constructor(private route: ActivatedRoute, private storageService: StorageService) {
    }

    ngOnInit() {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
    };

    groupBy = function (xs: MenuItem[], key: string): MenuItem[] {
        let objItems = xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
        return Object.keys(objItems).map((k) => objItems[k]);
    };

    addToCart = function (item: MenuItem) {
        let cartItem = this.storageService.read('cartItems');
        if (!cartItem) {
            cartItem = {items: {}, totalQty: 0, totalPrice: 0};
        }
        let items = cartItem.items;
        
        let storedItem = items[item.MenuItemId];
        if (!storedItem) {
            storedItem = items[item.MenuItemId] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.ItemPrice * storedItem.qty;
        cartItem.totalQty++;
        cartItem.totalPrice += storedItem.item.ItemPrice;
        
        cartItem.items = items;
        this.storageService.write('cartItems', cartItem);
    };
}
