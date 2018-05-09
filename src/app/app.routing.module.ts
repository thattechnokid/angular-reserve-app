import { NgModule } from '@angular/core';
//Basic Angular routing
import { RouterModule, Route } from "@angular/router";
"./app.component";
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Route[] = [
    {
        component: WelcomeComponent,
        path: "welcome"
    }, {
        component: ContactComponent,
        path: "contact"
    }, {
        component: AboutComponent,
        path: "about"
    }, {
        path: "rooms/:databaseID",
        component: RoomsComponent
    }, {
        path: "", //This is the root route, like the index.html in a regular HTML site
        redirectTo: "welcome",
        pathMatch: "full"

    }, { //Always make this one LAST!!!!
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)  
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}

 export const routedComponents = [ WelcomeComponent, RoomsComponent,PageNotFoundComponent,LoginComponent, LogoutComponent,ContactComponent, AboutComponent ];