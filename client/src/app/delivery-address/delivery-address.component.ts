import { Component } from '@angular/core';
import { Address } from './../shared/models/address.model';

@Component({
    templateUrl: './delivery-address.component.html'
})
export class DeliveryAddress {
    address: Address = {
        Street: '',
        Appartment: '',
        City: '',
        State: 0,
        Zip: ''
    };

    searchLocation = function (formAddress: Address) {
        console.log(formAddress);
    };
}
