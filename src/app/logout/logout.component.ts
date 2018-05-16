import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'gw-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  public userObservable: Observable<firebase.User>;
  public user: firebase.User;


  constructor(private _firebaseAuthService: AngularFireAuth) { }

  ngOnInit() {
    this.userObservable = this._firebaseAuthService.authState;
    this.userObservable.subscribe(userFromObservable => this.user = userFromObservable);
  }

    public logout(){
      this._firebaseAuthService.auth.signOut();
    }
}
