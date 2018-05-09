import { Injectable } from '@angular/core';
import { IRoom } from '../interfaces/IRoom';

@Injectable()
export class RoomService {

  public rooms: IRoom[];


  constructor() { 
    this.rooms = [{
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
      },]
  }

}
