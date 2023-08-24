import { AngularFireAuth } from 'angularfire2/auth';
import { Inject, Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute, private userService:UserService) {
    //before login we want to store returnurl to localstorage so after loggingin it directly goes back to checkout page thats why we are using private route:ActivatedRoute here
    this.user$=afAuth.authState;
   }
  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')||'/';//('/' this means root of our website)
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  get appUser$():Observable<AppUser>{
    return this.user$.switchMap(user=>{
      if(user) return this.userService.get(user.uid);
      return Observable.of(null);
    })
     
  }
}
