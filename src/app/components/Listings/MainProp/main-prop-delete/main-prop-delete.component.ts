import { Component, OnInit } from '@angular/core';
import { MainPropService } from '../../../../Services/main-prop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MainProp } from '../../../../Models/MainProp';

@Component({
  selector: 'app-main-prop-delete',
  templateUrl: './main-prop-delete.component.html',
  styleUrls: ['./main-prop-delete.component.css']
})
export class MainPropDeleteComponent implements OnInit {

  mainProp: MainProp;

  constructor(private _mainPropService: MainPropService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._mainPropService.getMainProp(p.get('id')).subscribe((singleMainProp: MainProp) => {
        this.mainProp = singleMainProp;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._mainPropService.deleteMainProp(this.mainProp.RealEstatePropertyId).subscribe(() => {
      this._router.navigate(['/MainProp']);
    });
  }

}
