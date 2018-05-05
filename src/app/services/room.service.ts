import { Injectable } from '@angular/core';
import { IRoom } from '../interfaces/IRoom';

@Injectable()
export class RoomService {

  public rooms: IRoom[];


  constructor() { 
    this.rooms = [{
      databaseID: "1",
      roomName:"Halo",
      roomPhoto: "halo.jpg"
    }, {
        databaseID: "2",
        roomName: "Starfox",
        roomPhoto: "starfox.jpg"
      }, {
        databaseID: "3",
        roomName: "Zelda",
        roomPhoto: "zelda.jpg"
      }, {
        databaseID: "4",
        roomName: "Donkey Kong",
        roomPhoto: "donkey-kong.jpg"
      },]
  }

}
