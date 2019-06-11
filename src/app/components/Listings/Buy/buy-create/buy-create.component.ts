import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-create',
  templateUrl: './buy-create.component.html',
  styleUrls: ['./buy-create.component.css']
})
export class BuyCreateComponent implements OnInit {

  buyPropForm: FormGroup;

  constructor(
    private _buyService: BuyService,
    private _form: FormBuilder,
    private _router: Router) 
    { this.createForm();
    }


  createForm() {
    this.buyPropForm = this._form.group({
      DateAvail: new FormControl,
      Description: new FormControl,
      Price: new FormControl
    });
  }

  onSubmit() {
    this._buyService.createBuyProp(this.buyPropForm.value).subscribe(data => {
      this._router.navigate(['/ForSale']);
    })
  }

  ngOnInit() {
  }

}
