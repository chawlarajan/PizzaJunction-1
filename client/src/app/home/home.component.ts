import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './../shared/services/storage.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private router: Router, private storageService: StorageService) { }

    goToMenu = function () {
        if (this.storageService.read('deliveryAddress')) {
            this.router.navigate(['menu']);
        } else {
            this.router.navigate(['delivery-address']);
        }
    }
}
