import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/Models/Buy';
import { BuyService } from '../../../../Services/buy.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../Services/auth.service';




@Component({
  selector: 'app-buy-update',
  templateUrl: './buy-update.component.html',
  styleUrls: ['./buy-update.component.css']
})
export class BuyUpdateComponent implements OnInit {

  isActive: boolean = true
  get isActiveBool(){
    return this.isActive == true
  }
  set isActiveBool(newValue:boolean) {
    this.isActive = newValue ? true : false
  }

  buy: Buy;
  editForm: FormGroup;

  constructor(private _form: FormBuilder,
    public authService: AuthService,
              private _buyService: BuyService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
                this._activatedRoute.paramMap.subscribe(p => {
                  this._buyService.getBuyPropById(p.get('id')).subscribe((prop: Buy) => {
                    this.buy = prop;
                    this.createForm();
                  })
                })
               }

  createForm() {
    this.editForm = this._form.group({
      BuyId: new FormControl(this.buy.BuyId),
      DateAvail: new FormControl(this.buy.DateAvail),
      Price: new FormControl(this.buy.Price),
      Description: new FormControl(this.buy.Description),

      RealEstatePropertyId: new FormControl(this.buy.RealEstatePropertyId),
      RealEstatePropertyName: new FormControl(this.buy.RealEstatePropertyName),
      ImageLink: new FormControl(this.buy.ImageLink),
      SquareFootage: new FormControl(this.buy.SquareFootage),
      RealEstateAddress: new FormControl(this.buy.RealEstateAddress),
      RealEstateCity: new FormControl(this.buy.RealEstateCity),
      RealEstateState: new FormControl(this.buy.RealEstateState),
      RealEstateZip: new FormControl(this.buy.RealEstateZip),
      PropertyType: new FormControl(this.buy.PropertyType),
      HasBasement: new FormControl(this.buy.HasBasement),
      HasPool: new FormControl(this.buy.HasPool),
      Bedroom: new FormControl(this.buy.Bedroom),
      Bathroom: new FormControl(this.buy.Bathroom),
      Stories: new FormControl(this.buy.Stories)
    })
  }

  onSubmit(form){
    const update: Buy = {
      BuyId: form.value.BuyId,
      DateAvail: form.value.DateAvail,
      Price: form.value.Price,
      Description: form.value.Description,

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
    }
    this._buyService.updateBuyProp(update).subscribe(p => {
      this._router.navigate(['/ForSale/Admin/List']);
    })
  };
  
 
  ngOnInit() {
  }

}
