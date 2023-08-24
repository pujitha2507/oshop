import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';


//inorder to login from unauthorised users
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }
  //inorder to eliminate login from anynomous users we will use canActivate() method
  //this route and state parameters are used if the user is logged in with google after logging in it shold return to ots original page i.e what ever page we have opened
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.auth.user$.map(user=> {
      //if user is logged in return true otherwise navigate user to login page
      if(user) return true;
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false;
    })

  }
}
