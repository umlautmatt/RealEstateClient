import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/Rent';


@Component({
  selector: 'app-rent-index',
  templateUrl: './rent-index.component.html',
  styleUrls: ['./rent-index.component.css']
})
export class RentIndexComponent implements OnInit {
 rent$: Rent[];

  constructor(private rentService: RentService) { }
  title = 'RealEstateClient';

  ngOnInit() {
        return this.rentService.getRent()
     .subscribe(rent => this.rent$ = rent);
  }

}
