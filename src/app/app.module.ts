import { environment } from './../environments/environment';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule, routedComponents } from "./app.routing.module"; 
import { RoomsModule } from "./rooms/room.module";

//Angular/Firebase crap \/
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';



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
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AppRoutingModule //This is always last i guess
        
    ],
    providers:[
        AngularFireAuth
    ],
    bootstrap:[
      AppComponent //This is choosing the component that boots when you fire up angular
    ]
    

})

export class AppModule{

}