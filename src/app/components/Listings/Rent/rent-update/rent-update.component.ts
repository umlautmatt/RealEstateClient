import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { RentProp } from '../../../../Models/RentProp';
import { RentService } from '../../../../Services/rent.service';
import { Rent } from 'src/app/Models/Rent';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {

  isActive: boolean = true
  get isActiveBool(){
    return this.isActive == true
  }
  set isActiveBool(newValue:boolean) {
    this.isActive = newValue ? true : false
  }

  rent: RentProp;

  editRentForm: FormGroup;

  constructor(private _form: FormBuilder,
    public authService: AuthService,
              private _rentService: RentService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                this._ar.paramMap.subscribe(p => {
                  this._rentService.getRent(p.get('id')).subscribe((singleRent: RentProp) => {
                    this.rent = singleRent;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm() {
    this.editRentForm = this._form.group({
      RentId: new FormControl(this.rent.RentId),
      DateAvailable: new FormControl(this.rent.DateAvailable),
      PricePerMonth: new FormControl(this.rent.PricePerMonth),
      Description: new FormControl(this.rent.Description),
      UtilitiesIncluded: new FormControl(this.rent.UtilitiesIncluded),
      PetsAllowed: new FormControl(this.rent.PetsAllowed),
      IsRentFavorite: new FormControl(this.rent.IsRentFavorite),

      RealEstatePropertyId: new FormControl(this.rent.RealEstatePropertyId),
      RealEstatePropertyName: new FormControl(this.rent.RealEstatePropertyName),
      ImageLink: new FormControl(this.rent.ImageLink),
      SquareFootage: new FormControl(this.rent.SquareFootage),
      RealEstateAddress: new FormControl(this.rent.RealEstateAddress),
      RealEstateCity: new FormControl(this.rent.RealEstateCity),
      RealEstateState: new FormControl(this.rent.RealEstateState),
      RealEstateZip: new FormControl(this.rent.RealEstateZip),
      PropertyType: new FormControl(this.rent.PropertyType),
      HasBasement: new FormControl(this.rent.HasBasement),
      HasPool: new FormControl(this.rent.HasPool),
      Bedroom: new FormControl(this.rent.Bedroom),
      Bathroom: new FormControl(this.rent.Bathroom),
      Stories: new FormControl(this.rent.Stories)
    });
  }

  onSubmit(form){
   
    const updateRent: Rent = {
      RentId: form.value.RentId,
      DateAvailable: form.value.DateAvailable,
      PricePerMonth: form.value.PricePerMonth,
      Description: form.value.Description,
      UtilitiesIncluded: form.value.UtilitiesIncluded,
      PetsAllowed: form.value.PetsAllowed,
      IsRentFavorite: form.value.IsRentFavorite,
      RealEstatePropertyId: form.value.RealEstatePropertyId,
      RealEstatePropertyName: form.value.RealEstatePropertyName,
      ImageLink: form.value.ImageLink,
      SquareFootage: form.value.SquareFootage,
      RealEstateAddress: form.value.RealEstateAddress,
      RealEstateCity: form.value.RealEstateCity,
      RealEstateState: form.value.RealEstateState,
      RealEstateZip: form.value.RealEstateZip,
      PropertyType: form.value.PropertyType,
      HasBasement: form.value.HasBasement,
      HasPool: form.value.HasPool,
      Bedroom: form.value.Bedroom,
      Bathroom: form.value.Bathroom,
      Stories: form.value.Stories
      
    };
    
    
    this._rentService.updateRent(updateRent).subscribe(d => {
      this._router.navigate(['/ForRent']);
    });
    
  }

}
