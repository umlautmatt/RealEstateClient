import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { Buy } from '../../../../Models/Buy';
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
  active;

  constructor(private _buyService: BuyService, public dialog: MatDialog) { }

  getBuyProps() {
    this._buyService.getAllBuyProps()
      .subscribe(data => {
        this._buyProps = data
      })
  }

  openPropDetails(id) {
    this._buyService.getBuyPropById(id).subscribe((data: Buy[]) => {
      this.active = data
      const propDetailDialog = this.dialog.open(BuyDetailsComponent, {
        width: '600px', height: '800px',
        data: { buyProp: this.active },
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
  }

}
