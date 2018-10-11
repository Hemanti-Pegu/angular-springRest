"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_flightImpl_1 = require("./app.flightImpl");
var app_flightservice_1 = require("./app.flightservice");
var FlightComponent = (function () {
    function FlightComponent(flightService) {
        this.flightService = flightService;
        this.search = '';
        this.index = 0;
    }
    FlightComponent.prototype.addFlight = function (id, name, price, source, destination, date) {
        this.option = 0;
        this.flights.push(new app_flightImpl_1.Flight(id, name, price, source, destination, date));
    };
    FlightComponent.prototype.showFlight = function (id) {
        for (var i = 0; i < this.flights.length; i++) {
            if (this.flights[i].id == id) {
                console.log(this.flights[i]);
                this.newId = this.flights[i].id;
                this.newName = this.flights[i].name;
                this.newPrice = this.flights[i].price;
                this.newSource = this.flights[i].source;
                this.newDestination = this.flights[i].destination;
                this.newDate = this.flights[i].date;
                return;
            }
        }
    };
    FlightComponent.prototype.updateFlight = function (newId, newName, newPrice, newSource, newDestination, newDate) {
        this.option = 2;
        for (var i = 0; i < this.flights.length; i++) {
            if (this.flights[i].id == newId) {
                this.flights[i] = new app_flightImpl_1.Flight(newId, newName, newPrice, newSource, newDestination, newDate);
                return;
            }
        }
    };
    FlightComponent.prototype.deleteFlight = function (id) {
        this.option = 1;
        for (var i = 0; i < this.flights.length; i++) {
            if (this.flights[i].id == id) {
                this.flights.splice(i, 1);
                return;
            }
        }
    };
    FlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng-init called...");
        this.flightService.getAllFlights().subscribe(function (flightData) { return _this.flights = flightData; });
    };
    FlightComponent.prototype.sortById = function () {
        console.log("Sorting by Id...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.id - flight2.id);
        });
    };
    FlightComponent.prototype.sortByName = function () {
        console.log("Sorting by Name...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.name.localeCompare(flight2.name));
        });
    };
    FlightComponent.prototype.sortByPrice = function () {
        console.log("Sorting by Price...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.price - flight2.price);
        });
    };
    FlightComponent.prototype.sortBySource = function () {
        console.log("Sorting by Source...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.source.localeCompare(flight2.source));
        });
    };
    FlightComponent.prototype.sortByDestination = function () {
        console.log("Sorting by Destination...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.destination.localeCompare(flight2.destination));
        });
    };
    FlightComponent.prototype.sortByDate = function () {
        console.log("Sorting by Date...");
        this.flights.sort(function (flight1, flight2) {
            return (flight1.date.localeCompare(flight2.date));
        });
    };
    FlightComponent.prototype.changeIndexToOne = function () {
        this.index = 1;
        console.log("index changed to: " + this.index);
    };
    FlightComponent.prototype.changeIndexToTwo = function () {
        this.index = 2;
        console.log("index changed to: " + this.index);
    };
    FlightComponent.prototype.changeIndexToThree = function () {
        this.index = 3;
        console.log("index changed to: " + this.index);
    };
    FlightComponent.prototype.changeIndexToFour = function () {
        this.index = 4;
        console.log("index changed to: " + this.index);
    };
    FlightComponent.prototype.changeIndexToFive = function () {
        this.index = 5;
        console.log("index changed to: " + this.index);
    };
    FlightComponent.prototype.changeIndexToSix = function () {
        this.index = 6;
        console.log("index changed to: " + this.index);
    };
    return FlightComponent;
}());
FlightComponent = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.flightcomponent.html',
        providers: [app_flightservice_1.FlightService]
    }),
    __metadata("design:paramtypes", [app_flightservice_1.FlightService])
], FlightComponent);
exports.FlightComponent = FlightComponent;
