import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Buy } from '../../../../Models/Buy';


@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.component.html',
  styleUrls: ['./buy-details.component.css']
})
export class BuyDetailsComponent implements OnInit {


  constructor
  (public propDetailDialog: MatDialogRef<BuyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any)
   { }


  ngOnInit() {
  }
}
