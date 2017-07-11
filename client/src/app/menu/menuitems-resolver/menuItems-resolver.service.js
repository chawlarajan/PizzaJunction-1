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
var menu_service_1 = require("./../../shared/services/menu.service");
var MenuItemsResolver = (function () {
    function MenuItemsResolver(menuService) {
        this.menuService = menuService;
    }
    MenuItemsResolver.prototype.resolve = function () {
        return this.menuService.getMenuItems().map(function (items) { return items; });
    };
    return MenuItemsResolver;
}());
MenuItemsResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuItemsResolver);
exports.MenuItemsResolver = MenuItemsResolver;
//# sourceMappingURL=menuItems-resolver.service.js.map