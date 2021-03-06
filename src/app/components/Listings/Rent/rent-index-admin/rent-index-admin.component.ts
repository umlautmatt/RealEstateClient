import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { RentProp } from 'src/app/Models/RentProp';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-rent-index-admin',
  templateUrl: './rent-index-admin.component.html',
  styleUrls: ['./rent-index-admin.component.css']
})
export class RentIndexAdminComponent implements OnInit {

  columnNames = ['details', 'Property Name', 'Property Type', 'Date Available', 'Price Per Month', 'Utilities Included', 'Pets Allowed', 'buttons']
  dataSource: MatTableDataSource<RentProp>

  constructor(private rentService: RentService, public authService: AuthService) { }

  ngOnInit() {
    this.rentService.getRents().subscribe(
      (data: RentProp[]) => { this.dataSource = new MatTableDataSource<RentProp>(data) })
  }
}