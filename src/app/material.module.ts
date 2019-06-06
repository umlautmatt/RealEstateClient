import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatFormFieldModule, 
  MatTableModule } from '@angular/material';

@NgModule({
declarations: [],

imports: [
CommonModule,
MatToolbarModule,
MatInputModule,
MatButtonModule,
MatFormFieldModule,
MatTableModule
],

exports: [
MatToolbarModule,
MatInputModule,   
MatButtonModule,
MatFormFieldModule,
MatTableModule
]

})
export class MaterialModule { }
