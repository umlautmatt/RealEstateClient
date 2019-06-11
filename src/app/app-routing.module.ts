import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';
import { BuyIndexComponent } from './components/Listings/Buy/buy-index/buy-index.component';
import { RentIndexComponent } from './components/Listings/Rent/rent-index/rent-index.component';
import { BuyDetailsComponent } from './components/Listings/Buy/buy-details/buy-details.component';
import { MainPropIndexComponent } from './components/Listings/MainProp/main-prop-index/main-prop-index.component';
import { MainPropCreateComponent } from './components/Listings/MainProp/main-prop-create/main-prop-create.component';
import { MainPropUpdateComponent } from './components/listings/MainProp/main-prop-update/main-prop-update.component';
import { MainPropDetailsComponent } from './components/listings/MainProp/main-prop-details/main-prop-details.component';
import { MainPropDeleteComponent } from './components/listings/MainProp/main-prop-delete/main-prop-delete.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},

  {path: 'ForSale',  children: [
    {path: 'List', component: BuyIndexComponent},
    {path: 'Details/:id', component: BuyDetailsComponent},
  ]},
  
  {path: 'ForRent', children: [
    {path: 'List', component: RentIndexComponent},
    {path: 'Details/:id', component: RentDetailsComponent},
  ]},
  
  {path: 'MainProp', children: [
    {path: '', component: MainPropIndexComponent },
    {path: 'Create', component: MainPropCreateComponent },
    {path: 'Update/:id', component: MainPropUpdateComponent },
    {path: 'Detail/:id', component: MainPropDetailsComponent },
    {path: 'Delete/:id', component: MainPropDeleteComponent }
      ]},
  
  {path: "**", component: RegisterComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
