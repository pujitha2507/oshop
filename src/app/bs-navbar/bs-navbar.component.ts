
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser:AppUser | undefined;
  constructor(private auth:AuthService) { 
    auth.appUser$.subscribe(appUser=>this.appUser=appUser);
    
  }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();

  }

}
