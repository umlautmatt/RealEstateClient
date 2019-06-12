import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MainPropService } from '../../../../Services/main-prop.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { PropertyTypeEnum, PropertyType2Label } from 'src/app/Models/MainProp';

export interface PropType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-prop-create',
  templateUrl: './main-prop-create.component.html',
  styleUrls: ['./main-prop-create.component.css']
})

export class MainPropCreateComponent implements OnInit {
  
  onChecked(obj: any, isChecked: boolean){
    console.log(obj, isChecked); // {}, true || false
  }
  mainPropForm: FormGroup;
  propertyTypes: PropType[] = [
    {value: 'Residential', viewValue: 'Residential'},
    {value: 'Commercial', viewValue: 'Commercial' },
    {value: 'Industrial', viewValue: 'Industrial' },
    {value: 'Land', viewValue: 'Land' }
  ];

  
  


  constructor(private _mainPropService: MainPropService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

   
   
   ngOnInit() {
  }

  createForm(){
    this.mainPropForm = this._form.group({
      RealEstatePropertyName: new FormControl,
      ImageLink: new FormControl,
      SquareFootage: new FormControl,
      RealEstateAddress: new FormControl,
      RealEstateCity: new FormControl,
      RealEstateState: new FormControl,
      RealEstateZip: new FormControl,
      PropertyType: new FormControl,
      HasBasement: new FormControl,
      HasPool: new FormControl,
      Bedroom: new FormControl,
      Bathroom: new FormControl,
      Stories: new FormControl
    });
  }
  
  onSubmit(){
    if (this.mainPropForm.value.HasBasement != true) {
      this.mainPropForm.value.HasBasement = false;
    };
    console.log(this.mainPropForm.value);
    if (this.mainPropForm.value.HasPool != true) {
      this.mainPropForm.value.HasPool = false;
    };
    console.log(this.mainPropForm.value);
    this._mainPropService.createMainProp(this.mainPropForm.value).subscribe( data => {
      this._router.navigate(['/MainProp'])
    });
  }
  
}