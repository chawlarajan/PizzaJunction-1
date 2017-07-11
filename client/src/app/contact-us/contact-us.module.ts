import { NgModule } from '@angular/core';
import { ContactUs } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const contactUsRoutes: Routes = [{ path:'', component: ContactUs}];

@NgModule({
    imports: [
        RouterModule.forChild(contactUsRoutes)
    ],
    declarations: [
        ContactUs
    ],
    providers: []
})
export class ContactUsModule { }
