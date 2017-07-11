import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuRoutes } from './../menuroutes/menu.routes';
import { MenuComponent } from './../menu.component';
import { MenuItemsComponent } from './../menuitems/menuitems.component';
import { OrderSummaryComponent } from './../ordersummary/ordersummary.component';
import { CheckoutComponent } from './../checkout/checkout.component';
import { StorageService } from './../../shared/services/storage.service';
import { Globals } from './../../shared/components/globals/global';
import { OrderConfirmation } from './../../menu/order-confirmation/order-confirmation.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MenuRoutes)
    ],
    declarations: [
        MenuComponent,
        MenuItemsComponent,
        OrderSummaryComponent,
        CheckoutComponent,
        OrderConfirmation
    ],
    providers: [
        StorageService,
        Globals
    ]
})
export class MenuModule { }
