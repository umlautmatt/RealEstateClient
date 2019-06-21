import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/Rent';
import { MatTableDataSource } from '@angular/material';
import { MainPropService } from '../../../../Services/main-prop.service'
import { MainProp } from '../../../../Models/MainProp';
import { MatDialog } from '@angular/material';
import { RentDetailsComponent } from '../rent-details/rent-details.component';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-rent-index',
  templateUrl: './rent-index.component.html',
  styleUrls: ['./rent-index.component.css']
})
export class RentIndexComponent implements OnInit {

  saveToList: boolean;
  _rentProps;
  rent : Rent[];

  //columnNames = ['details', 'RentId', 'DateAvailable', 'PricePerMonth', 'Description', 'UtilitiesIncluded', 'PetsAllowed', 'IsRentFavorite', 'RealEstatePropertyId', 'buttons']
  //dataSource: MatTableDataSource<Rent>

  constructor(private _rentService: RentService, 
    public authService: AuthService,
              public dialog: MatDialog) { }

  getRentProps() {
    this._rentService.getRents()
      .subscribe(data => {
        this._rentProps = data
        console.log(data)
      })
  }

  openPropDetails(item: Rent) {
    //this._rentService.getRentPropById(id).subscribe((_buy: Rent[]) => {
      //this.active = data
      const propDetailDialog = this.dialog.open(RentDetailsComponent, {
        width: '600px', height: '800px',
        data: { name : item.RealEstatePropertyName,
                propType: item.PropertyType,
                dateAvailable: item.DateAvailable,
                pricePerMonth: item.PricePerMonth,
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
    this.getRentProps();
  }
}
