import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/Models/Rent';
import { RentService } from "src/app/Services/rent.service";
// import { MainPropService } from '../../../../Services/main-prop.service';
// import { MainProp } from 'src/app/Models/MainProp';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {

  rent: Rent;
  //mainREProp: MainProp;

  constructor(private _activatedRoute: ActivatedRoute, private _rentService: RentService) {}
  
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._rentService.getRent(routeData.get('id')).subscribe((singleRent: Rent) => {
        this.rent = singleRent;
      });
    });
  }
  // constructor(private _activatedMPRoute: ActivatedRoute, private _mainPropService: MainPropService) { }
    
  // ngOnInit() {
  //   this._activatedMPRoute.paramMap.subscribe(routeData => {
  //     this._mainPropService.getMainProp(routeData.get('id')).subscribe((singleMainProp: MainProp) => {
  //       this.mainREProp = singleMainProp;
  //     });
  //   });
  // }

}
