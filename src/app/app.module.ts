import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/Account/login/login.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { HomeComponent } from './components/Home/home/home.component';
import { BuyIndexComponent } from './components/Listings/Buy/buy-index/buy-index.component';
import { BuyCreateComponent } from './components/Listings/Buy/buy-create/buy-create.component';
import { BuyUpdateComponent } from './components/Listings/Buy/buy-update/buy-update.component';
import { BuyDetailsComponent } from './components/Listings/Buy/buy-details/buy-details.component';
import { BuyDeleteComponent } from './components/Listings/Buy/buy-delete/buy-delete.component';
import { RentCreateComponent } from './components/Listings/Rent/rent-create/rent-create.component';
import { RentUpdateComponent } from './components/Listings/Rent/rent-update/rent-update.component';
import { RentDetailsComponent } from './components/Listings/Rent/rent-details/rent-details.component';
import { RentIndexComponent } from './components/Listings/Rent/rent-index/rent-index.component';
import { RentDeleteComponent } from './components/Listings/Rent/rent-delete/rent-delete.component';
import { MainPropIndexComponent } from './components/listings/MainProp/main-prop-index/main-prop-index.component';
import { MainPropCreateComponent } from './components/listings/MainProp/main-prop-create/main-prop-create.component';
import { MainPropDeleteComponent } from './components/listings/MainProp/main-prop-delete/main-prop-delete.component';
import { MainPropUpdateComponent } from './components/listings/MainProp/main-prop-update/main-prop-update.component';
import { MainPropDetailsComponent } from './components/listings/MainProp/main-prop-details/main-prop-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapsComponent,
    LoginComponent,
    RegisterComponent,
    AuthGuardComponent,
    HomeComponent,
    BuyIndexComponent,
    BuyCreateComponent,
    BuyUpdateComponent,
    BuyDetailsComponent,
    BuyDeleteComponent,
    RentCreateComponent,
    RentUpdateComponent,
    RentDetailsComponent,
    RentIndexComponent,
    RentDeleteComponent,
    MainPropIndexComponent,
    MainPropCreateComponent,
    MainPropDeleteComponent,
    MainPropUpdateComponent,
    MainPropDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
