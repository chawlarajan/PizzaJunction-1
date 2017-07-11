'use strict';
import { MenuItem } from './../../models/menuitem';

export const apiPath = 'http://localhost:5000/api/';
const GSTAmount = 5;

export class Globals {
    generateArray = function (menuItems: any): MenuItem[] {
        let arr = [];
        if (menuItems) {
            for (let id in menuItems.items) {
                arr.push(menuItems.items[id]);
            }
        }
        return arr;
    };

    getGSTAmount() {
        return GSTAmount;
    };
}
