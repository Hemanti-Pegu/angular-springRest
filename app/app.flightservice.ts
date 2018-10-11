import { Injectable } from '@angular/core';
import { IFlight } from './app.flight';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

@Injectable()
export class FlightService {
    flights: IFlight[];
    constructor(private http: Http) {
        
    }
    getAllFlights():Observable< IFlight[]> {
            return this.http.get("app/flightlist.json").
            map((response: Response) => <IFlight[]>response.json());
    }
}

