import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { MainPropService } from '../../../../Services/main-prop.service'
import { Buy } from '../../../../Models/Buy';
import { MatDialog, MatCard } from '@angular/material';
import { BuyDetailsComponent } from '../buy-details/buy-details.component';

@Component({
  selector: 'app-buy-index',
  templateUrl: './buy-index.component.html',
  styleUrls: ['./buy-index.component.css']
})
export class BuyIndexComponent implements OnInit {
  saveToList: boolean;
  _buyProps;
  _buy : Buy[];
  _mainProps;
  active;

  constructor(
    private _buyService: BuyService, 
    // private _mainPropService: MainPropService,
    public dialog: MatDialog) { }

  getBuyProps() {
    this._buyService.getAllBuyProps()
      .subscribe(data => {
        this._buyProps = data
        console.log(data)
      })
  }

  // getMainProps() {
  //   this._mainPropService.getMainProps()
  //   .subscribe(data => {
  //     this._mainProps = data
  //   })
  // }

  openPropDetails(id) {
    this._buyService.getBuyPropById(id).subscribe((data: Buy[]) => {
      this.active = data
      const propDetailDialog = this.dialog.open(BuyDetailsComponent, {
        width: '600px', height: '800px',
        data: { buyProp: this._buy },
        panelClass: 'app-full-bleed-dialog'
      })

      propDetailDialog.afterClosed().subscribe(result => {
        console.log();
        this.saveToList = result;
      })
    })
  }

  ngOnInit() {
    this.getBuyProps();
    // this.getMainProps();
  }

}
