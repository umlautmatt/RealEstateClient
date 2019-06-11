import { Component, OnInit } from '@angular/core';
import { MainPropService } from '../../../../Services/main-prop.service';
import { MainProp } from '../../../../Models/MainProp';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-main-prop-index',
  templateUrl: './main-prop-index.component.html',
  styleUrls: ['./main-prop-index.component.css']
})
export class MainPropIndexComponent implements OnInit {

  columnNames = ['details', 'RealEstatePropertyId', 'RealEstatePropertyName', 'ImageLink', 'RealEstateState', 'buttons'];
  dataSource: MatTableDataSource<MainProp>;

  constructor(private _mainPropService: MainPropService) { }

  ngOnInit() {
    this._mainPropService.getMainProps().subscribe((mainProp: MainProp[]) => {
      this.dataSource = new MatTableDataSource<MainProp>(mainProp)
      console.log(mainProp)
    });
  }
}

