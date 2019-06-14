import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { MainPropService } from '../../../../Services/main-prop.service'
import { Buy } from '../../../../Models/Buy';
import { MainProp } from '../../../../Models/MainProp';
import { MatDialog } from '@angular/material';
import { BuyDetailsComponent } from '../buy-details/buy-details.component';

@Component({
  selector: 'app-buy-index',
  templateUrl: './buy-index.component.html',
  styleUrls: ['./buy-index.component.css']
})
export class BuyIndexComponent implements OnInit {
  saveToList: boolean;
  _buyProps;
  buy : Buy[];
  //active;

  constructor(
    private _buyService: BuyService, 
    public dialog: MatDialog) { }

  getBuyProps() {
    this._buyService.getAllBuyProps()
      .subscribe(data => {
        this._buyProps = data
        console.log(data)
      })
  }

  openPropDetails(item: Buy) {
    //this._buyService.getBuyPropById(id).subscribe((_buy: Buy[]) => {
      //this.active = data
      const propDetailDialog = this.dialog.open(BuyDetailsComponent, {
        width: '600px', height: '800px',
        data: { name : item.RealEstatePropertyName,
                propType: item.PropertyType,
                dateAvail: item.DateAvail,
                price: item.Price,
                description: item.Description,
                pic: item.ImageLink,
                address: item.RealEstateAddress,
                city: item.RealEstateCity,
                state: item.RealEstateState,
                zip: item.RealEstateZip,
                sqFoot: item.SquareFootage,
                bedrooms: item.Bedroom,
                bathrooms: item.Bathroom,
                stories: item.Stories,
                pool: item.HasPool,
                basement: item.HasBasement    
        },
        panelClass: 'app-full-bleed-dialog'
      })

      propDetailDialog.afterClosed().subscribe(result => {
        console.log();
        this.saveToList = result;
      })
    
  }

  ngOnInit() {
    this.getBuyProps();
  }

}
