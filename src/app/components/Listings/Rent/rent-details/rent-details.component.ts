import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RentProp } from '../../../../Models/RentProp';
import { Rent } from '../../../../Models/Rent';
// import { RentService } from "src/app/Services/rent.service";
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {

  rent: RentProp;

  //constructor(private _activatedRoute: ActivatedRoute, private _rentService: RentService) {}

  constructor
  (public propDetailDialog: MatDialogRef<RentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Rent)
   { }


  ngOnInit() {
  }
  
  // ngOnInit() {
  //   this._activatedRoute.paramMap.subscribe(routeData => {
  //     this._rentService.getRent(routeData.get('id')).subscribe((singleRent: RentProp) => {
  //       this.rent = singleRent;
  //     });
  //   });
  // }
}