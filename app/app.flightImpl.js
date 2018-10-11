"use strict";
var Flight = (function () {
    function Flight(id, name, price, source, destination, date) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.source = source;
        this.destination = destination;
        this.date = date;
    }
    return Flight;
}());
exports.Flight = Flight;
