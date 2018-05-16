import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'gw-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _auth: AngularFireAuth) { }

  ngOnInit() {
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
