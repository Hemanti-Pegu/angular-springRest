import { Component, OnInit } from '@angular/core';
import { IFlight } from './app.flight';
import { Flight } from './app.flightImpl';
import { FlightService } from './app.flightservice';
import { NgForm } from "@angular/Forms/forms";

@Component( {
    selector: '<my-component></my-component>',
    templateUrl: './app.flightcomponent.html',
    providers: [FlightService]
} )

export class FlightComponent implements OnInit {
    flights: IFlight[];

    newId: number;
    newName: string;
    newPrice: number;
    newSource: string;
    newDestination: string;
    newDate: string;
    option: number;


    addFlight( id: number, name: string, price: number, source: string, destination: string, date: string  ): void {
        this.option = 0;
        this.flights.push( new Flight( id, name, price, source, destination, date ) );
    }

    showFlight( id: number ): void {
        for ( var i = 0; i < this.flights.length; i++ ) {
            if ( this.flights[i].id == id ) {
                console.log( this.flights[i] );
                this.newId = this.flights[i].id;
                this.newName = this.flights[i].name;
                this.newPrice = this.flights[i].price;
                this.newSource = this.flights[i].source;
                this.newDestination = this.flights[i].destination;
                this.newDate = this.flights[i].date;
                return;
            }
        }
    }

    updateFlight( newId: number, newName: string, newPrice: number, newSource: string, newDestination: string, newDate: string ): void {
        this.option = 2;
        for ( var i = 0; i < this.flights.length; i++ ) {
            if ( this.flights[i].id == newId ) {
                this.flights[i] = new Flight( newId, newName, newPrice, newSource, newDestination, newDate );
                return;
            }
        }
    }

    deleteFlight( id: number ): void {
        this.option = 1;
        for ( var i = 0; i < this.flights.length; i++ ) {
            if ( this.flights[i].id == id ) {
                this.flights.splice( i, 1 );
                return;
            }
        }
    }


    search: string = '';
    constructor( private flightService: FlightService ) {

    }

    ngOnInit(): void {
        console.log( "ng-init called..." );
        this.flightService.getAllFlights().subscribe(( flightData ) => this.flights = flightData );
    }

    sortById() {
        console.log( "Sorting by Id..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.id - flight2.id );
        } );
    }

    sortByName() {
        console.log( "Sorting by Name..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.name.localeCompare( flight2.name ) );
        } );
    }

    sortByPrice() {
        console.log( "Sorting by Price..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.price - flight2.price );
        } );
    }

    sortBySource() {
        console.log( "Sorting by Source..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.source.localeCompare( flight2.source ) );
        } );
    }
    
    sortByDestination() {
        console.log( "Sorting by Destination..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.destination.localeCompare( flight2.destination ) );
        } );
    }
    
    sortByDate() {
        console.log( "Sorting by Date..." );
        this.flights.sort( function( flight1, flight2 ) {
            return ( flight1.date.localeCompare( flight2.date ) );
        } );
    }

    index: number = 0;

    changeIndexToOne(): void {
        this.index = 1;
        console.log( "index changed to: " + this.index );
    }
    changeIndexToTwo(): void {
        this.index = 2;
        console.log( "index changed to: " + this.index );
    }
    changeIndexToThree(): void {
        this.index = 3;
        console.log( "index changed to: " + this.index );
    }
    changeIndexToFour(): void {
        this.index = 4;
        console.log( "index changed to: " + this.index );
    }
    changeIndexToFive(): void {
        this.index = 5;
        console.log( "index changed to: " + this.index );
    }
    changeIndexToSix(): void {
        this.index = 6;
        console.log( "index changed to: " + this.index );
    }
 
}
 