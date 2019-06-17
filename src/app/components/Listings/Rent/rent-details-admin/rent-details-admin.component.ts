import { Component, OnInit } from '@angular/core';
import { RentProp } from '../../../../Models/RentProp';
import { Rent } from '../../../../Models/Rent';
import { RentService } from "src/app/Services/rent.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-details-admin',
  templateUrl: './rent-details-admin.component.html',
  styleUrls: ['./rent-details-admin.component.css']
})
export class RentDetailsAdminComponent implements OnInit {

  rent: RentProp;

  constructor(private _activatedRoute: ActivatedRoute, private _rentService: RentService) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._rentService.getRent(routeData.get('id')).subscribe((singleRent: RentProp) => {
        this.rent = singleRent;
      });
    });
  }

}