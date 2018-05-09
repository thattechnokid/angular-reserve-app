import { NgModule } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomRoutingModule, routedComponents } from './room.routing.module';

@NgModule({
    imports:[RoomRoutingModule],
    exports:[],
    providers:[RoomService],
    declarations:[routedComponents]

})

export class RoomsModule{

}