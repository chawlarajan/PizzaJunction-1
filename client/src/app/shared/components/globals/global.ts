'use strict';
import { MenuItem } from './../../models/menuitem';

export const apiPath = 'http://localhost:5000/api/';
const GSTAmount = 5;

export class Globals {
    generateArray = function (menuItems: any): MenuItem[] {
        let arr: any[] = [];
        if (menuItems) {
            Object.keys(menuItems.items).map(id => arr.push(menuItems.items[id]));
        }
        return arr;
    };

    getGSTAmount() {
        return GSTAmount;
    };
}
