import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Buy } from '../Models/Buy';
import { APIURL } from '../../environments/environment.prod';

//const ApiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net';
//const ApiUrl = 'http://localhost:62642'


@Injectable({
  providedIn: 'root'
})


export class BuyService {

  constructor(private _http: HttpClient) { }

  getAllBuyProps() {
    return this._http.get(`${APIURL}/api/Buy`, { headers: this.getHeaders() });
  }

  getBuyPropById(id: string) {
    return this._http.get(`${APIURL}/api/Buy/${id}`, { headers: this.getHeaders() });
  }

  createBuyProp(buyProp: Buy) {
    return this._http.post(`${APIURL}/api/Buy`, buyProp, {headers: this.getHeaders()});
  }

  updateBuyProp(buyProp: Buy) {
    return this._http.put(`${APIURL}/api/Buy/`, buyProp, { headers: this.getHeaders() });
  }

  deleteBuyProp(id: number) {
    return this._http.delete(`${APIURL}/api/Buy/${id}`, { headers: this.getHeaders() });
  }



  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
