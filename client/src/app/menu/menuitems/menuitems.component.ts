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
    constructor(private route: ActivatedRoute, private storageService: StorageService) { }

    ngOnInit() {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemTitle');
    };

    groupBy = function (xs: MenuItem[], key: string): MenuItem[] {
        let objItems = xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
        return Object.keys(objItems).map((k) => objItems[k]);
    };

    addToCart = function (item: MenuItem) {
        let items = this.storageService.read('cartItems');
        if (!items) {
            items = [];
        }
        let storedItem = items[item.ItemId];
        if (!storedItem) {
            storedItem = items[item.ItemId] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.ItemPrice * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.ItemPrice;
        this.storageService.write('cartItems', items);
        console.log(items);
    };

}
