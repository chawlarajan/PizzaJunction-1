import { NgModule } from '@angular/core';
import { ContactUs } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const contactUsRoutes: Routes = [{ path: '', component: ContactUs }];

@NgModule({
    imports: [
        RouterModule.forChild(contactUsRoutes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDQVCEwiDngg-HOyOD8-TskXQywkmCi-Rw'
        })
    ],
    declarations: [
        ContactUs
    ],
    providers: []
})
export class ContactUsModule { }
