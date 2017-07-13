import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { Ng2TableModule } from 'ng2-table/components/ng-table-module';
import { PaginationModule } from 'ngx-bootstrap';

import { OrdersRoutes } from './../routes';
import { OrdersComponent } from './../orders.component';
import { TableComponent } from './../table/table.component';
import { OrderService } from './../Order.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(OrdersRoutes),
        Ng2TableModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        OrdersComponent,
        TableComponent
    ],
    providers: [OrderService]
})
export class OrdersModule {
}
