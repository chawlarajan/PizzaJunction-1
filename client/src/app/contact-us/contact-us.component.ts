import { Component } from '@angular/core';

@Component({
    templateUrl: './contact-us.component.html',
    styles: [`
        .agm-map { height: 300px; }
    `]
})
export class ContactUs {
    private title: string = 'Pizza Junction Snacks';
    private lat: number = 49.054765;
    private lng: number = -122.325902;
}
