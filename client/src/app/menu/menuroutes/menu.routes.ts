import { MenuComponent } from './../menu.component';
import { MenuItemsResolver } from './../menuitems-resolver/menuItems-resolver.service';
import { CheckoutComponent } from './../checkout/checkout.component';

export const MenuRoutes = [
    { path: '', component: MenuComponent, resolve: { menuItems: MenuItemsResolver } },
    { path: 'checkout', component: CheckoutComponent}
];
