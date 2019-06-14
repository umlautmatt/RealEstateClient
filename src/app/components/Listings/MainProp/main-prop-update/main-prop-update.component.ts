import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { MainProp } from '../../../../Models/MainProp';
import { MainPropService } from '../../../../Services/main-prop.service';

export interface PropType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-prop-update',
  templateUrl: './main-prop-update.component.html',
  styleUrls: ['./main-prop-update.component.css']
})
export class MainPropUpdateComponent implements OnInit {

  isActive: boolean = true
  get isActiveBool(){
    return this.isActive == true
  }
  set isActiveBool(newValue:boolean) {
    this.isActive = newValue ? true : false
  }

  mainProp: MainProp;

  editMainPropForm: FormGroup;

  propertyTypes: PropType[] = [
    {value: 'Residential', viewValue: 'Residential'},
    {value: 'Commercial', viewValue: 'Commercial' },
    {value: 'Industrial', viewValue: 'Industrial' },
    {value: 'Land', viewValue: 'Land' }
  ];
  // mainPropForm: any;

  constructor(private _form: FormBuilder,
              private _mainPropService: MainPropService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                this._ar.paramMap.subscribe(p => {
                  this._mainPropService.getMainProp(p.get('id')).subscribe((singleMainProp: MainProp) => {
                    this.mainProp = singleMainProp;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm() {
    this.editMainPropForm = this._form.group({
      RealEstatePropertyId: new FormControl(this.mainProp.RealEstatePropertyId),
      RealEstatePropertyName: new FormControl(this.mainProp.RealEstatePropertyName),
      ImageLink: new FormControl(this.mainProp.ImageLink),
      SquareFootage: new FormControl(this.mainProp.SquareFootage),
      RealEstateAddress: new FormControl(this.mainProp.RealEstateAddress),
      RealEstateCity: new FormControl(this.mainProp.RealEstateCity),
      RealEstateState: new FormControl(this.mainProp.RealEstateState),
      RealEstateZip: new FormControl(this.mainProp.RealEstateZip),
      PropertyType: new FormControl(this.mainProp.PropertyType),
      HasBasement: new FormControl(this.mainProp.HasBasement),
      HasPool: new FormControl(this.mainProp.HasPool),
      Bedroom: new FormControl(this.mainProp.Bedroom),
      Bathroom: new FormControl(this.mainProp.Bathroom),
      Stories: new FormControl(this.mainProp.Stories)
    });
  }

  onSubmit(form){
   
    const updateMainProp: MainProp = {
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
    
    
    this._mainPropService.updateMainProp(updateMainProp).subscribe(d => {
      this._router.navigate(['/MainProp']);
    });
    
  }

}
