import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

//const Api_Url = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net';
const Api_Url = 'http://localhost:62642'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn: boolean;
  //role: any;

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/account/register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/token`, str).subscribe((token: Token) => {
      console.log(token);
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('role', token.role)
      this.isLoggedIn = true;
      this._router.navigate(['/Home']); 
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;

    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });
    this._router.navigate(['/Login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }


}
