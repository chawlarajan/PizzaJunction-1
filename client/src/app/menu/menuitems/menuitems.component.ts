import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../../shared/models/menuitem';
// import { MenuService } from './../../shared/services/menu.service';       //removed as added in resolve

@Component({
    selector: 'menu-items',
    templateUrl: './menuitems.component.html'
})
export class MenuItemsComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }
    menuItems: MenuItem[];

    ngOnInit() {        
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, "ItemTitle");
        console.log(this.menuItems);
    };

    groupBy = function (xs: MenuItem[], key: string) {
        var objItems = xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
        return Object.keys(objItems).map((k) => objItems[k]);
    };
}
