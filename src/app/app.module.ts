import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RoomService } from './services/room.service';

import { AppRoutingModule, routedComponents } from "./app.routing.module"; //Importing the separate module into the main one


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        routedComponents
        //Telling angular about the component
    ],
    imports:[
        BrowserModule,
        AppRoutingModule
    ],
    providers:[
        RoomService //This is where you put your services
    ],
    bootstrap:[
      AppComponent //This is choosing the component that boots when you fire up angular
    ]
    

})

export class AppModule{

}