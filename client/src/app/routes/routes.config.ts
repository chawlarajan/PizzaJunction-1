import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { MenuComponent } from './../menu/menu.component';
import { LoginComponent } from './../login/login.component';
import { PageNotFoundComponent } from './../error404/error404.component';
import { MenuItemsResolver } from './../menu/menuitems-resolver/menuItems-resolver.service';

export const RouteConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent, resolve: { menuItems: MenuItemsResolver } },     ////implement Routeguard for specific item details
    { path: 'login', component: LoginComponent },
    { path: 'error404', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];
