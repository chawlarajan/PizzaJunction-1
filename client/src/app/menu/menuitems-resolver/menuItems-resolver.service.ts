import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// import { MenuItem } from './../../shared/models/menuitem';
import { MenuService } from './../../shared/services/menu.service';

@Injectable()
export class MenuItemsResolver implements Resolve<any> {
    constructor (private menuService: MenuService) {

    }

    resolve() {
        return this.menuService.getMenuItems().map(items => items);
    }
}
