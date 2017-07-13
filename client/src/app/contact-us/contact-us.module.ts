import { NgModule } from '@angular/core';
import { ContactUs } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ContactUsService } from './../shared/services/contact-us.service';

const contactUsRoutes: Routes = [{ path: '', component: ContactUs }];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(contactUsRoutes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDQVCEwiDngg-HOyOD8-TskXQywkmCi-Rw'
        })
    ],
    declarations: [
        ContactUs
    ],
    providers: [ ContactUsService ]
})
export class ContactUsModule { }
