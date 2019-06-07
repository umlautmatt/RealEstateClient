import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rent } from '../Models/Rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
apiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net/api/Rent/';
  constructor(private _http: HttpClient) { }

  getRent() {
    return this._http.get<Rent[]>(this.apiUrl);
  }

}
