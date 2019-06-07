import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const ApiUrl = 'https://realestatemanagerwebapi20190606115209.azurewebsites.net/';


@Injectable({
  providedIn: 'root'
})


export class BuyService {

  constructor(private _http: HttpClient) { }

  getAllBuyProps() {
    return this._http.get(`${ApiUrl}/api/buy`, { headers: this.getHeaders() });
  }

  getBuyPropById(id: string) {
    return this._http.get(`${ApiUrl}/api/Buy/${id}`, { headers: this.getHeaders() });
  }


  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
