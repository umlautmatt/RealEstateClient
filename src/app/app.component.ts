import { Component, OnInit } from '@angular/core';
import { Rent } from './Models/Rent';
import { RentService } from './Services/rent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
rent$: Rent[];

constructor(private rentService: RentService) {}
  //title = 'RealEstateClient';

  ngOnInit() {
    return this.rentService.getRent()
    .subscribe(rent => this.rent$ = rent);
  }
}
