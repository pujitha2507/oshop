

import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';


@Injectable()
//user should not be able to access the items for which they dont have access
export class UserService {

  constructor(private db: AngularFireDataBase) { }
    save(user:firebase.User){
      this.db.object('/users/'+user.uid).update({
        name:user.displayName,
        email:user.email
      });
    }
    get(uid:string):FirebaseObjectObservable<AppUser>{
      return this.db.object('/users/'+uid);
    }
  
}
