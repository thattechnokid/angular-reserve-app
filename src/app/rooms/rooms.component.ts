import { IRoom } from './../interfaces/IRoom';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 



@Component({
  selector: 'gw-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public roomList: IRoom[];
  public databaseID: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router //Using this to access URL bar data in the ngIf in the HTML
  ) { }

  public ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.databaseID = paramMap.get("databaseID");
      //I think this just makes it possible for angular to get access to the URL "map" and so stuff with it????????????
      
    
    });
  }

}
