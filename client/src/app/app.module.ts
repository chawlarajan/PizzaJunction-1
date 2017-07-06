import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsComponent } from './menu/menuitems/menuitems.component';
import { OrderSummaryComponent } from './menu/ordersummary/ordersummary.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './error404/error404.component'
import { MenuItemsResolver } from './menu/menuitems-resolver/menuItems-resolver.service';
//Services
import { MenuService } from './shared/services/menu.service';

//Models
import { MenuItem } from './shared/models/menuitem';

//Routing
import { RouteConfig } from './routes/routes.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RouteConfig),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenuItemsComponent,
    OrderSummaryComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    MenuService,
    MenuItem,
    MenuItemsResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
