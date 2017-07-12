import { Component, OnInit } from '@angular/core';
import { ContactUsModel } from './../shared/models/contact-us.model';
import { ContactUsService } from './../shared/services/contact-us.service';

@Component({
    templateUrl: './contact-us.component.html',
    styles: [`
        agm-map { height: 300px; }
    `]
})
export class ContactUs implements OnInit {
    title: string = 'Pizza Junction Snacks';
    zoom: number = 18;
    lat: number = 49.054765;
    lng: number = -122.325902;
    private contact: ContactUsModel = {
        Id: 0,
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    };

    constructor(private contactUsService: ContactUsService) { }

    ngOnInit() {
    };

    sendEmail = function (contactModel: ContactUsModel) {
        this.contactUsService.add(this.contact);
    };
}
