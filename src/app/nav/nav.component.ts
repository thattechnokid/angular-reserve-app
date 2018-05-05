import { IRoom } from './../interfaces/IRoom';
import { RoomService } from './../services/room.service';
import { Component,OnInit } from '@angular/core';
import { INavigationItem } from "./../interfaces/INavigationItem";

@Component({
    selector: "gw-nav",
    templateUrl:"./nav.component.html",
    styleUrls:[
        "./nav.component.scss"
    ]
})
export class NavComponent implements OnInit{
   
    public navArray: INavigationItem[];
    public rooms: IRoom[];

    constructor(private roomService: RoomService) {
    
    } //injects the RoomService "Service" into this nav component | Gives you access to RoomService and all of its goodies

    ngOnInit() {
        
        // this.navArray = [{
        //     label:"Welcome",
        //     url:"welcome"
        // },{
        //     label:"About",
        //     url:"about"
        // },
        //  {
        //     label:"Contact",
        //     url:"contact"
        //  }];
        this.navArray = this.roomService.rooms.map(room => {
            return {
                label: room.roomName,
                url: "rooms/" + room.databaseID
            };
        });
        this.navArray.unshift({label: "Welcome", url:"welcome"});
        this.navArray.push({label: "About", url: "about"});

    }
}