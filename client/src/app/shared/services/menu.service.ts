import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { apiPath } from './../components/globals/global';

@Injectable()
export class MenuService {
    constructor(private http: Http) {
        // to get id from route/url
        // private route: ActivatedRoute
        // this.route.snapshot.params['id'];
        // [routerLink]="['/path', param]"
    }

    getMenuItems(): Observable<any> {
        return this.http.get(apiPath + 'MenuItems/getMenuItems')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.errorMethod);
    }

    errorMethod(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }
}
