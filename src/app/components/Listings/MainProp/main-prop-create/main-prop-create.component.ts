import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MainPropService } from '../../../../Services/main-prop.service';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Services/auth.service';

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
  imageLink: any;
  
  isActive: boolean = true
  get isActiveBool(){
    return this.isActive
  }
  set isActiveBool(newValue:boolean) {
    this.isActive = newValue ? true : false
  }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninethFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  eleventhFormGroup: FormGroup;
  twelvthFormGroup: FormGroup;


  mainPropForm: FormGroup;
  propertyTypes: PropType[] = [
    { value: 'Residential', viewValue: 'Residential' },
    { value: 'Commercial', viewValue: 'Commercial' },
    { value: 'Industrial', viewValue: 'Industrial' },
    { value: 'Land', viewValue: 'Land' }
  ];





  constructor(private _mainPropService: MainPropService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }
  createForm() {
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


  ngOnInit() {
    this.firstFormGroup = this._form.group({
      RealEstatePropertyName: ['', Validators.required]
    });
    this.secondFormGroup = this._form.group({
      ImageLink: ['', Validators.required]
    });
    this.thirdFormGroup = this._form.group({
      SquareFootage: ['', Validators.required]
    });
    this.fourthFormGroup = this._form.group({
      RealEstateAddress: ['', Validators.required]
    });
    this.fifthFormGroup = this._form.group({
      RealEstateCity: ['', Validators.required]
    });
    this.sixthFormGroup = this._form.group({
      Bathroom: ['', Validators.required]
    });
    this.seventhFormGroup = this._form.group({
      RealEstateState: ['', Validators.required]
    });
    this.eighthFormGroup = this._form.group({
      RealEstateZip: ['', Validators.required]
    });
    this.ninethFormGroup = this._form.group({
      Bedroom: ['', Validators.required]
    });
    this.tenthFormGroup = this._form.group({
      Stories: ['', Validators.required]
    });
    this.eleventhFormGroup = this._form.group({
      PropertyType: ['', Validators.required]
    });
    this.twelvthFormGroup = this._form.group({
      secondCtrl: ['', Validators.required]
    });
  }



  onSubmit() {
    
    if (this.mainPropForm.value.HasBasement != true){
      this.mainPropForm.value.HasBasement = false;
    };
    if (this.mainPropForm.value.HasPool != true){
      this.mainPropForm.value.HasPool = false;
    };

    this._mainPropService.createMainProp(this.mainPropForm.value).subscribe(data => {
      this._router.navigate(['/MainProp'])
    });
  }

}