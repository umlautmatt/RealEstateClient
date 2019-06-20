import { Component, OnInit } from '@angular/core';
import { BuyService } from '../../../../Services/buy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Buy } from '../../../../Models/Buy';
import { AuthService } from '../../../../Services/auth.service';


@Component({
  selector: 'app-buy-delete',
  templateUrl: './buy-delete.component.html',
  styleUrls: ['./buy-delete.component.css']
})
export class BuyDeleteComponent implements OnInit {

  buy: Buy;

  constructor(private _buyService: BuyService,
    public authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.paramMap.subscribe(prop => {
      this._buyService.getBuyPropById(prop.get('id')).subscribe((buyProp: Buy) => {
        this.buy = buyProp;
      })
    })
  }

  onDelete() {
    this._buyService.deleteBuyProp(this.buy.BuyId).subscribe(() => {
      this._router.navigate(['/ForSale/Admin/List']);
    })
  }

  ngOnInit() {
  }

}
