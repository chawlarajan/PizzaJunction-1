import { Component } from '@angular/core';

@Component({
    templateUrl: './contact-us.component.html',
    styles: [`
        agm-map { height: 300px; }
    `]
})
export class ContactUs {
    title: string = 'Pizza Junction Snacks';
    lat: number = 49.054765;
    lng: number = -122.325902;
}
