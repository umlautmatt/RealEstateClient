import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated: Subject<boolean>;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}

