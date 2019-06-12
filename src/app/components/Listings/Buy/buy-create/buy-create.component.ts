import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-buy-create',
  templateUrl: './buy-create.component.html',
  styleUrls: ['./buy-create.component.css']
})
export class BuyCreateComponent implements OnInit {
  // date = new FormControl(new Date());
  buyPropForm: FormGroup;

  constructor(
    private _ngZone: NgZone,
    private _buyService: BuyService,
    private _form: FormBuilder,
    private _router: Router) 
    { this.createForm();
    }


  createForm() {
    this.buyPropForm = this._form.group({
      RealEstatePropertyId: new FormControl,
      DateAvail: new FormControl(new Date()),
      Description: new FormControl,
      Price: new FormControl
    });
  }

  onSubmit() {
    this._buyService.createBuyProp(this.buyPropForm.value).subscribe(data => {
      console.log(data)
      this._router.navigate(['/ForSale']);
    })
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  
  ngOnInit() {
  }

}
