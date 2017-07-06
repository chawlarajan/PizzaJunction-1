"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_component_1 = require("./../menu.component");
var menuItems_resolver_service_1 = require("./../menuitems-resolver/menuItems-resolver.service");
exports.MenuRoutes = [
    { path: '', component: menu_component_1.MenuComponent, resolve: { menuItems: menuItems_resolver_service_1.MenuItemsResolver } }
];
//# sourceMappingURL=menu.routes.js.map