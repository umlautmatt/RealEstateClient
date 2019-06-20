import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Subject } from 'rxjs';
<<<<<<< HEAD
import { UserInfo } from '../../Models/UserInfo';
=======
import { RouteConfigLoadEnd } from '@angular/router';
import { window } from 'rxjs/operators';
>>>>>>> 07e822d2bfd9abfecc186c3688140fd9f2924254

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
