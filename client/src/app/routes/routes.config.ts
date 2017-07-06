import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { PageNotFoundComponent } from './../error404/error404.component';

export const RouteConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', loadChildren: '/app/menu/menu-module/menu.module#MenuModule' },     //path to the file # Modulename
    { path: 'login', loadChildren: '/app/login/login-module/login.module#LoginModule' },
    //{ path: 'login', component: LoginComponent },
    { path: 'error404', component: PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];
