"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./../home/home.component");
var menu_component_1 = require("./../menu/menu.component");
var login_component_1 = require("./../login/login.component");
var error404_component_1 = require("./../error404/error404.component");
var menuItems_resolver_service_1 = require("./../menu/menuitems-resolver/menuItems-resolver.service");
exports.RouteConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'menu', component: menu_component_1.MenuComponent, resolve: { menuItems: menuItems_resolver_service_1.MenuItemsResolver } },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'error404', component: error404_component_1.PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];
//# sourceMappingURL=routes.config.js.map