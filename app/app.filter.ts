import {  Pipe, PipeTransform }      from '@angular/core';
import { IFlight } from "./app.flight";

@Pipe({
  name: 'searchPipe',
      pure:false
})

export class SearchPipe implements PipeTransform {
    transform(flights:any, search:any, index:number): any {
        if(search == null || search == undefined) return flights;
           
        return flights.filter(function(flight:any){
        console.log(flight);
        let val: any;
        switch(index) {
            case 1: val = flight.id.toString().includes(search); break;
            case 2: val = flight.name.toLowerCase().includes(search.toLowerCase()); break;
            case 3: val = flight.price.toString().includes(search); break;
            case 4: val = flight.source.toLowerCase().includes(search.toLowerCase()); break;
            case 5: val = flight.destination.toLowerCase().includes(search.toLowerCase()); break;
            case 6: val = flight.date.toLowerCase().includes(search.toLowerCase()); break;
            default: console.log("Something is wrong");
        }
        return val; 
      })
   }
}