import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public userObservable: Observable<firebase.User>;
    public user: firebase.User;


  constructor(private _firebaseAuthService: AngularFireAuth) { }

  ngOnInit() {
    this.userObservable = this._firebaseAuthService.authState;
    this.userObservable.subscribe(userFromObservable => this.user = userFromObservable);
  }


  public login() {
    this._firebaseAuthService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  

}
