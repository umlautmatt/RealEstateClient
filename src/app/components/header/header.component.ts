import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isAdmin: boolean;

  constructor(public authService: AuthService) {
   }

  ngOnInit() { 
    if(localStorage.getItem('role') == "Admin")
    { this.isAdmin = true; } else { this.isAdmin = false; }
   }

  logOut() {
    this.authService.logout();
  }

}
