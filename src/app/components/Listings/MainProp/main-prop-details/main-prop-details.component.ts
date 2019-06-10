import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainProp } from '../../../../Models/MainProp';
import { MainPropService } from '../../../../Services/main-prop.service';

@Component({
  selector: 'app-main-prop-details',
  templateUrl: './main-prop-details.component.html',
  styleUrls: ['./main-prop-details.component.css']
})
export class MainPropDetailsComponent implements OnInit {

  mainProp: MainProp;

  constructor(private _activatedRoute: ActivatedRoute, private _mainPropService: MainPropService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._mainPropService.getMainProp(routeData.get('id')).subscribe((singleMainProp: MainProp) => {
        this.mainProp = singleMainProp;
      });
    });
  }

}
