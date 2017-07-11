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
var storage_service_1 = require("./../../shared/services/storage.service");
var MenuItemsComponent = (function () {
    function MenuItemsComponent(route, storageService) {
        this.route = route;
        this.storageService = storageService;
        this.groupBy = function (xs, key) {
            var objItems = xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
            return Object.keys(objItems).map(function (k) { return objItems[k]; });
        };
        this.addToCart = function (item) {
            var cartItem = this.storageService.read('cartItems');
            if (!cartItem) {
                cartItem = { items: {}, totalQty: 0, totalPrice: 0 };
            }
            var items = cartItem.items;
            var storedItem = items[item.MenuItemId];
            if (!storedItem) {
                storedItem = items[item.MenuItemId] = { item: item, qty: 0, price: 0 };
            }
            storedItem.qty++;
            storedItem.price = storedItem.item.ItemPrice * storedItem.qty;
            cartItem.totalQty++;
            cartItem.totalPrice += storedItem.item.ItemPrice;
            cartItem.items = items;
            this.storageService.write('cartItems', cartItem);
            this.cartChanged.emit(cartItem);
        };
        this.cartChanged = new core_1.EventEmitter();
    }
    ;
    MenuItemsComponent.prototype.ngOnInit = function () {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
    };
    ;
    return MenuItemsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MenuItemsComponent.prototype, "cartChanged", void 0);
MenuItemsComponent = __decorate([
    core_1.Component({
        selector: 'menu-items',
        templateUrl: './menuitems.component.html',
        providers: [storage_service_1.StorageService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, storage_service_1.StorageService])
], MenuItemsComponent);
exports.MenuItemsComponent = MenuItemsComponent;
//# sourceMappingURL=menuitems.component.js.map