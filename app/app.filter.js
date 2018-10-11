"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (flights, search, index) {
        if (search == null || search == undefined)
            return flights;
        return flights.filter(function (flight) {
            console.log(flight);
            var val;
            switch (index) {
                case 1:
                    val = flight.id.toString().includes(search);
                    break;
                case 2:
                    val = flight.name.toLowerCase().includes(search.toLowerCase());
                    break;
                case 3:
                    val = flight.price.toString().includes(search);
                    break;
                case 4:
                    val = flight.source.toLowerCase().includes(search.toLowerCase());
                    break;
                case 5:
                    val = flight.destination.toLowerCase().includes(search.toLowerCase());
                    break;
                case 6:
                    val = flight.date.toLowerCase().includes(search.toLowerCase());
                    break;
                default: console.log("Something is wrong");
            }
            return val;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'searchPipe',
        pure: false
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
