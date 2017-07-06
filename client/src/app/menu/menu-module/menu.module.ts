import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuRoutes } from './../menuroutes/menu.routes';
import { MenuComponent } from './../menu.component';
import { MenuItemsComponent } from './../menuitems/menuitems.component';
import { OrderSummaryComponent } from './../ordersummary/ordersummary.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MenuRoutes)
    ],
    declarations: [
        MenuComponent,
        MenuItemsComponent,
        OrderSummaryComponent
    ],
    providers: []
})
export class MenuModule {

}
