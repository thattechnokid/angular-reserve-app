import * as firebase from "firebase";

import { NgModule } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomRoutingModule, routedComponents } from './room.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [FormsModule,RoomRoutingModule, CommonModule],
    exports:[],
    providers:[RoomService],
    declarations:[routedComponents]

})

export class RoomsModule{

}