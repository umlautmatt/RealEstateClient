import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BuyService } from '../../../../Services/buy.service';


@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.component.html',
  styleUrls: ['./buy-details.component.css']
})
export class BuyDetailsComponent implements OnInit {

  constructor
  (@Inject(MAT_DIALOG_DATA)
  public data: any,
  private buyService: BuyService)
   { }


  ngOnInit() {
  }
}