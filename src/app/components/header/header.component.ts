import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Subject } from 'rxjs';
import { UserInfo } from '../../Models/UserInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  role: UserInfo;

  constructor(public authService: AuthService) {
   }

   get isAdmin() {
    return this.role.Role
   }

  ngOnInit() { 

   }

  logOut() {
    this.authService.logout();
  }

}
