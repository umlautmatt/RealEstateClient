import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Subject } from 'rxjs';
import { RouteConfigLoadEnd } from '@angular/router';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  userRole: boolean;

  constructor(public authService: AuthService) {
   }

  ngOnInit() { 
   }

  logOut() {
    this.authService.logout();
  }

}
