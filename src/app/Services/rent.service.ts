import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rent } from '../Models/Rent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RentService {
//apiUrl = 'http://localhost:62642';
apiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net/api';
  
constructor(private _http: HttpClient) { }

  getRents(){
  return this._http.get(`${this.apiUrl}/Rent`, { headers: this.getHeaders()});
  }

  getRent(id: string){
    return this._http.get(`${this.apiUrl}/Rent/${id}`, { headers: this.getHeaders() });
    }

createRent(rent: Rent) {
  return this._http.post(`${this.apiUrl}/Rent`, rent, { headers: this.getHeaders()});
}

deleteRent( id: number) {
  return this._http.delete(`${this.apiUrl}/Rent/${id}`, { headers: this.getHeaders() });
}



  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}


}
