import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from 'src/app/Models/Rent';
import { RentService } from 'src/app/Services/rent.service';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-rent-delete',
  templateUrl: './rent-delete.component.html',
  styleUrls: ['./rent-delete.component.css']
})
export class RentDeleteComponent implements OnInit {
  rent: Rent;
  
  constructor(public authService: AuthService, private _activatedRoute: ActivatedRoute, private _rentService: RentService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._rentService.getRent(routeData.get('id')).subscribe((singleRent: Rent) => {
        this.rent = singleRent;
      });
    });
  }
  onDelete() {
    this._rentService.deleteRent(this.rent.RentId).subscribe(() => {
      this._router.navigate(['/ForRent']);
    });
  }
}
