"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { MenuService } from './../../shared/services/menu.service';       //removed as added in resolve
var MenuItemsComponent = (function () {
    //@Input() item: MenuItem[];    
    function MenuItemsComponent(route) {
        this.route = route;
        this.getNewList = function (arr) {
            var arrItems;
            //var index = arr.findIndex((inside: MenuItem) => (inside.ItemTitle === item.ItemTitle));
            //this.arrItems.push(item);
            //var index = this.arrItems.findIndex((inside: MenuItem) => (inside.ItemTitle === item.ItemTitle));
            //console.log(this.arrItems);
        };
    }
    MenuItemsComponent.prototype.ngOnInit = function () {
        this.menuItems = this.route.snapshot.data['menuItems'].GetMenuItems;
        //this.menuItems = this.menuService.getMenuItems();     //uncomment if removed asynchronous getting of data
        //subscribe as getting data asynchronoysly
        // this.menuService.getMenuItems().subscribe(data => {
        //     //var newList = this.getNewList(data.GetMenuItems);
        //     this.menuItems = data.GetMenuItems;
        // });
    };
    ;
    return MenuItemsComponent;
}());
MenuItemsComponent = __decorate([
    core_1.Component({
        selector: 'menu-items',
        templateUrl: './menuitems.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], MenuItemsComponent);
exports.MenuItemsComponent = MenuItemsComponent;
//# sourceMappingURL=menuitems.component.js.map