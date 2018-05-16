import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { IRoom } from '../interfaces/IRoom';
import { of } from "rxjs/observable/of";

@Injectable()
export class RoomService {

  public rooms: Observable<IRoom[]>;


  constructor() { 
    this.rooms = of([{
      databaseID: "Halo",
      roomName:"Halo",
      roomPhoto: "halo.jpg"
    }, {
        databaseID: "Starfox",
        roomName: "Starfox",
        roomPhoto: "starfox.jpg"
      }, {
        databaseID: "Zelda",
        roomName: "Zelda",
        roomPhoto: "zelda.jpg"
      }, {
        databaseID: "Donkey Kong",
        roomName: "Donkey Kong",
        roomPhoto: "donkey-kong.jpg"
      },])
  }
  writeRoomReservation(){
    console.log("Reserve");
    
  }
  deleteRoomReservation(){
    console.log("Delete");
    
  }
}
