import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';

import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component'

import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';


import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
