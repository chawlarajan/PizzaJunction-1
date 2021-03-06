import { Component } from '@angular/core';
import { Address } from './../shared/models/address.model';

@Component({
    templateUrl: './delivery-address.component.html'
})
export class DeliveryAddress {

    getDeliveryMinTime = function (): Date {
        var minTime = new Date();
        minTime.setMinutes(minTime.getMinutes() + 45);
        return minTime;
    };

    getDeliveryMaxTime = function (): Date {
        var maxTime = new Date();
        maxTime.setHours(20);
        maxTime.setMinutes(16);
        return maxTime;
    };

    address: Address = {
        AddressId: 0,
        DeliveryTime: '',
        Street: '',
        Appartment: '',
        City: '',
        State: 0,
        Zip: ''
    };
    private minMoment: Date = this.getDeliveryMinTime();
    private maxMoment: Date = this. getDeliveryMaxTime();
    searchLocation = function (formAddress: Address) {
        console.log(formAddress);
    };

}
