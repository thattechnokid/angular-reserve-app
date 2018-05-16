import { IRoom } from './../interfaces/IRoom';
import { RoomService } from './../services/room.service';
import { Component,OnInit } from '@angular/core';
import { INavigationItem } from "./../interfaces/INavigationItem";
import { Router } from '@angular/router';
import {map,take} from 'rxjs/operators';

@Component({
    selector: "gw-nav",
    templateUrl:"./nav.component.html",
    styleUrls:[
        "./nav.component.scss"
    ]
})
export class NavComponent implements OnInit{
   
    public navArray: INavigationItem[] = [{
        label:"Welcome",
        url:"welcome"
    }];

    // public rooms: IRoom[];
    public router: Router;

    constructor(private roomService: RoomService
    ) {
    
    } //injects the RoomService "Service" into this nav component | Gives you access to RoomService and all of its goodies

    ngOnInit() {
        //OLD ARRAY Nav Code \/
        // this.navArray = this.roomService.rooms.map(room => {
        //     return {
        //         label: room.roomName,
        //         url: "rooms/" + room.databaseID
        //     };
        // });
        // this.navArray.unshift({label: "Welcome", url:"welcome"});
        

        this.roomService.rooms.pipe(
            map(
                (rooms:IRoom[]) => rooms.map(
                    (eachRoom:IRoom) =>{
                        return{
                            label: eachRoom.roomName,
                            url: "rooms/" + eachRoom.databaseID
                        };
                    })
            ),
            take(1)
        ).subscribe(
            (navItems:INavigationItem[]) => {
                for(const eachItem of navItems){
                    this.navArray.push(eachItem);
                }
            })

        this.navArray.push({label: "About", url: "about"});
    }
}