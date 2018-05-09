
import { ListComponent } from './reservation/list/list.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
//Basic Angular routing
import { RouterModule, Route } from "@angular/router";

import { RoomsComponent } from './rooms.component';
import { FormComponent } from './reservation/form/form.component';
"./app.component";


const routes: Route[] = [
   {
       path: "rooms/:databaseID",
       component: RoomsComponent,
       children: [{
           path: "form",
           component: FormComponent
       },{
           path: "list",
           component: ListComponent
       },{
           path: "**",
           redirectTo: "list",
           pathMatch: "full"
       }]
   }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class RoomRoutingModule {

}

export const routedComponents = [RoomsComponent, ListComponent, FormComponent]