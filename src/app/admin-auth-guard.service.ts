import { UserService } from './user.service';
import { auth } from 'firebase';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  //users who have admin role can only access manage orders and manage products
  //in this service we are checking whether user is an admin or not
  constructor(private auth:AuthService,private userService:UserService) { }
  canActivate():Observable<boolean>{
    return this.auth.appUser$.map(appUser=>appUser.isAdmin)

  }
}
