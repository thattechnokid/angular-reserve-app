import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';

//Basic Angular routing
import { RouterModule, Route } from "@angular/router";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { AlertModule } from "ngx-bootstrap";
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomService } from './services/room.service';

const routes: Route[] = [
    {
         component: WelcomeComponent,
         path: "welcome"
    },{
        component: ContactComponent,
        path: "contact"
    }, {
        component: AboutComponent,
        path: "about"
    },{
        path: "rooms/:databaseID", 
        component: RoomsComponent
    },{
        path:"", //This is the root route, like the index.html in a regular HTML site
        redirectTo:"welcome",
        pathMatch: "full"
        
    },{ //Always make this one LAST!!!!
        path: "**",
        component: PageNotFoundComponent
    }
];


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        WelcomeComponent,
        PageNotFoundComponent,
        ContactComponent,
        AboutComponent,
        RoomsComponent
        
        //Telling angular about the component
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes)
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