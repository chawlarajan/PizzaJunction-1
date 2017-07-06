import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './../loginroutes/login.route'
import { LoginComponent } from './../login.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(LoginRoutes)
    ],
    declarations: [
        LoginComponent
    ],
    providers: []
})
export class LoginModule{

}