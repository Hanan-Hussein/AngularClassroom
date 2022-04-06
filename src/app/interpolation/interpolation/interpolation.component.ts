import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

cars=['Toyota','Truck','Jeep'];
person={name:"Farry",profession:"software engineer",age:23}


noOfCars=()=>{
  return this.cars.length;
}
}
