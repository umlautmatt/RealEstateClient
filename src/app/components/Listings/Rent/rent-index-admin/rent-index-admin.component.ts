import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/Rent';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rent-index-admin',
  templateUrl: './rent-index-admin.component.html',
  styleUrls: ['./rent-index-admin.component.css']
})
export class RentIndexAdminComponent implements OnInit {

  columnNames = ['details', 'RentId', 'Available', 'PricePerMonth', 'Description', 'UtilitiesIncluded', 'PetsAllowed', 'IsRentFavorite', 'RealEstatePropertyId', 'buttons']
  dataSource: MatTableDataSource<Rent>

  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.rentService.getRents().subscribe(
      (data: Rent[]) => { this.dataSource = new MatTableDataSource<Rent>(data) })
  }
}