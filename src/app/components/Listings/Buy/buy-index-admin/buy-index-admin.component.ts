import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { Buy } from '../../../../Models/Buy';
import { MatTableDataSource, MatTab } from '@angular/material';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-buy-index-admin',
  templateUrl: './buy-index-admin.component.html',
  styleUrls: ['./buy-index-admin.component.css']
})
export class BuyIndexAdminComponent implements OnInit {

  columnNames = ['details', 'BuyId', 'RealEstatePropertyName', 'PropertyType', 'DateAvail', 'Price', 'buttons']
  dataSource: MatTableDataSource<Buy>
  
  constructor(private buyService: BuyService, public authService: AuthService) { }

  ngOnInit() {
  this.buyService.getAllBuyProps().subscribe((data: Buy[] ) =>{this.dataSource = new MatTableDataSource<Buy>(data)})
  }
}
