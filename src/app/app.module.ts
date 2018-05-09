import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule, routedComponents } from "./app.routing.module"; 
import { RoomsModule } from "./rooms/room.module";
//Importing the separate modules into the main one


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        routedComponents
        //Telling angular about the components
    ],
    imports:[
        BrowserModule,
        RoomsModule,
        AppRoutingModule //This is always last i guess
        
    ],
    providers:[

    ],
    bootstrap:[
      AppComponent //This is choosing the component that boots when you fire up angular
    ]
    

})

export class AppModule{

}