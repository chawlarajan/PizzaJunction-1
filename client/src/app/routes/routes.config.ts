import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { PageNotFoundComponent } from './../error404/error404.component';

export const RouteConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', loadChildren: '/app/menu/menu-module/menu.module#MenuModule' },     // path to the file # Modulename
    { path: 'login', loadChildren: '/app/login/login-module/login.module#LoginModule' },
    { path: 'orders', loadChildren: '/app/orders/orders-module/orders.module#OrdersModule' },
    { path: 'about-us', loadChildren: '/app/about-us/about-us.module#AboutUsModule'}, //component: AboutUs},
    { path: 'contact-us', loadChildren: '/app/contact-us/contact-us.module#ContactUsModule'},
    { path: 'error404', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];
