import { NgModule } from '@angular/core';
import { AboutUs } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';

const aboutUsRoute: Routes = [{ path:'', component: AboutUs}];

@NgModule({
    imports: [
        RouterModule.forChild(aboutUsRoute)
    ],
    declarations: [
        AboutUs
    ],
    providers: []
})
export class AboutUsModule{}