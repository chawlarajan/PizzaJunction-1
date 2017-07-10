import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MenuService } from './../../shared/services/menu.service';
import { MenuItem } from './../../shared/models/menuitem';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuItemsResolver implements Resolve<any> {
    constructor (private menuService: MenuService) {
    }

    resolve(): Observable<MenuItem[]> {
        return this.menuService.getMenuItems().map(items => items);
    }
}
