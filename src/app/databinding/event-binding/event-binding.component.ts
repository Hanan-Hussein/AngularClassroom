import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{
clicks=0
someText:any;
  mybuttonClick(){
   this.clicks++;
  }
 inputText(elm:any){
this.someText=elm.target.value;
 }

}
