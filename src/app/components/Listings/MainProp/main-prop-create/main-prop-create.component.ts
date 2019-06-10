import { Component, OnInit } from '@angular/core';
import { MainPropService } from '../../../../Services/main-prop.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-prop-create',
  templateUrl: './main-prop-create.component.html',
  styleUrls: ['./main-prop-create.component.css']
})
export class MainPropCreateComponent implements OnInit {

  mainPropForm: FormGroup;

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
    this._mainPropService.createMainProp(this.mainPropForm.value).subscribe( data => {
      this._router.navigate(['/mainprop'])
    });
  }

}
