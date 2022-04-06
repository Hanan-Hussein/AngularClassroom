import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './Introduction/first-component/first-component.component';
import { SecondComponentComponent } from './Introduction/second-component/second-component.component';
import { EventBindingComponent } from './databinding/event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    EventBindingComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
