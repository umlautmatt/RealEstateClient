import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/Rent';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rent-index',
  templateUrl: './rent-index.component.html',
  styleUrls: ['./rent-index.component.css']
})
export class RentIndexComponent implements OnInit {

  columnNames = ['details', 'RentId', 'Available', 'PricePerMonth', 'Description', 'UtilitiesIncluded', 'PetsAllowed', 'IsRentFavorite', 'RealEstatePropertyId']
  dataSource: MatTableDataSource<Rent>

  constructor(private rentService: RentService) { }

  ngOnInit() {
    //this.rentService.getRent().subscribe(
      //(data: Rent[]) => { this.dataSource = new MatTableDataSource<Rent>(data) })
      //   (err: any) => console.log(err),
      //   () => console.log('All done getting Rental Properties.'
      // )
      ;

  }

}
