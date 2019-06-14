import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MainPropService } from '../../../../Services/main-prop.service';
import { MainProp } from 'src/app/Models/MainProp';


@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.css']
})

export class RentCreateComponent implements OnInit {

  isActive: boolean = true
  get isActiveBool(){
    return this.isActive == true
  }
  set isActiveBool(newValue:boolean) {
    this.isActive = newValue ? true : false
  }

rentForm: FormGroup;
mainREProp: MainProp[];

  constructor(private _rentService: RentService, private _rent: FormBuilder, private _router: Router, private _mainPropService: MainPropService, ) {
    this.createForm();
   }

  ngOnInit() {
    this._mainPropService.getMainProps().subscribe((mainREProp: MainProp[]) => {this.mainREProp = mainREProp});
  }

  createForm() {
    this.rentForm = this._rent.group({
      //RentId: new FormControl,
      Available: new FormControl,
      PricePerMonth: new FormControl,
      Description: new FormControl,
      UtilitiesIncluded: new FormControl,
      PetsAllowed: new FormControl,
      IsRentFavorite: new FormControl,
      RealEstatePropertyId: new FormControl,
      RealEstateAddress: new FormControl
    });
  }
    onSubmit() {
      console.log(this.rentForm.value);
      this._rentService.createRent(this.rentForm.value).subscribe(data => {
        this._router.navigate(['/ForRent']);
      });
    }
}
