import { Component, OnInit } from '@angular/core';
import { Buy } from '../../../../Models/Buy';
import { BuyService } from '../../../../Services/buy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-details-admin',
  templateUrl: './buy-details-admin.component.html',
  styleUrls: ['./buy-details-admin.component.css']
})
export class BuyDetailsAdminComponent implements OnInit {

  buy: Buy;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _buyService: BuyService,
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._buyService.getBuyPropById(routeData.get('id')).subscribe((prop: Buy) => {
        this.buy = prop;
      })
    })
  }

}
