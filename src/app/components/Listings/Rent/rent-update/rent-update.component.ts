import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { Rent } from '../../../../Models/Rent';
import { RentService } from '../../../../Services/rent.service';

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

  rent: Rent;

  editRentForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _rentService: RentService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                this._ar.paramMap.subscribe(p => {
                  this._rentService.getRent(p.get('id')).subscribe((singleRent: Rent) => {
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
      Available: new FormControl(this.rent.Available),
      PricePerMonth: new FormControl(this.rent.PricePerMonth),
      Description: new FormControl(this.rent.Description),
      UtilitiesIncluded: new FormControl(this.rent.UtilitiesIncluded),
      PetsAllowed: new FormControl(this.rent.PetsAllowed),
      IsRentFavorite: new FormControl(this.rent.IsRentFavorite)
    });
  }

  onSubmit(form){
   
    const updateRent: Rent = {
      RentId: form.value.RentId,
      Available: form.value.Available,
      PricePerMonth: form.value.PricePerMonth,
      Description: form.value.Description,
      UtilitiesIncluded: form.value.UtilitiesIncluded,
      PetsAllowed: form.value.PetsAllowed,
      IsRentFavorite: form.value.IsRentFavorite
      
    };
    
    
    this._rentService.updateRent(updateRent).subscribe(d => {
      this._router.navigate(['/Rent']);
    });
    
  }

}
