import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rent } from '../Models/Rent';
import { Observable } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RentService {
//apiUrl = 'http://localhost:62642';
//apiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net/api';
  
constructor(private _http: HttpClient) { }

  getRents(){
  return this._http.get(`${APIURL}/api/Rent`, { headers: this.getHeaders()});
  }

  getRent(id: string){
    return this._http.get(`${APIURL}/api/Rent/${id}`, { headers: this.getHeaders() });
    }

createRent(rent: Rent) {
  return this._http.post(`${APIURL}/api/Rent`, rent, { headers: this.getHeaders()});
}

deleteRent( id: number) {
  return this._http.delete(`${APIURL}/api/Rent/${id}`, { headers: this.getHeaders() });
}


updateRent(rent: Rent){
  return this._http.put(`${APIURL}/api/Rent`, rent, { headers: this.getHeaders()});
}


  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}


}
