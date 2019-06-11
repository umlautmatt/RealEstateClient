import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rent } from '../Models/Rent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {
apiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net/api/Rent/';
  constructor(private _http: HttpClient) { }

  getRent(): Observable<Rent[]> {
console.log('Getting all Rents from the server.');
    return this._http.get<Rent[]>(this.apiUrl);

    //this._http.get<Rent[]>(this.apiUrl);

  }

}
