
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject('')public auth:AuthService) {
    

   }

  ngOnInit(): void {
  }
  login(){
   this.auth.login();

  }

}
