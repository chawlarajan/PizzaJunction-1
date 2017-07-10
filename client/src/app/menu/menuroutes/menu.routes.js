"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_component_1 = require("./../menu.component");
var menuItems_resolver_service_1 = require("./../menuitems-resolver/menuItems-resolver.service");
var checkout_component_1 = require("./../checkout/checkout.component");
exports.MenuRoutes = [
    { path: '', component: menu_component_1.MenuComponent, resolve: { menuItems: menuItems_resolver_service_1.MenuItemsResolver } },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent }
];
//# sourceMappingURL=menu.routes.js.map