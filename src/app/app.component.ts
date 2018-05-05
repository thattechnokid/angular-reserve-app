import { Component } from '@angular/core';

@Component({
    selector:"gw-root",
    templateUrl: "./app.component.html",
    styleUrls: [
        "app.component.scss"
    ]
})

export class AppComponent{ //this is where you put all of your logic
    public welcome: string = "Welcome to the app";

}