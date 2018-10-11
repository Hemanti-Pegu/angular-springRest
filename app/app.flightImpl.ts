import { IFlight } from "./app.flight";

export class Flight implements IFlight {
    id: number;
    name: string;
    price: number;
    source: string;
    destination: string;
    date: string;

    constructor( id: number, name: string, price: number, source: string, destination: string, date: string ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.source = source;
        this.destination = destination;
        this.date = date;
    }

}