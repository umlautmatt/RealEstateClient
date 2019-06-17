import { Component, OnInit } from '@angular/core';
import { RentProp } from '../../../../Models/RentProp';
import { RentService } from "src/app/Services/rent.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {

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
