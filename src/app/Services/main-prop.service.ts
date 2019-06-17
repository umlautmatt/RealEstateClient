import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainProp } from '../Models/MainProp';
import { APIURL } from '../../environments/environment.prod';

//const ApiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net'
//const ApiUrl = 'http://localhost:62642'

@Injectable({
  providedIn: 'root'
})
export class MainPropService {

  constructor(private _http: HttpClient) { }

  getMainProps() {
    return this._http.get(`${APIURL}/api/RealEstateProperty`, { headers: this.getHeaders() });
  }

  createMainProp(mainProp: MainProp) {
    return this._http.post(`${APIURL}/api/RealEstateProperty`, mainProp, { headers: this.getHeaders() });
  }

  getMainProp(id: string) {
    return this._http.get(`${APIURL}/api/RealEstateProperty/${id}`, { headers: this.getHeaders() });
  }

  updateMainProp( mainProp: MainProp) {
    return this._http.put(`${APIURL}/api/RealEstateProperty`, mainProp, { headers: this.getHeaders() });
  }

  deleteMainProp( id: number) {
    return this._http.delete(`${APIURL}/api/RealEstateProperty/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
