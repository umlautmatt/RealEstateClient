import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';
import { BuyIndexComponent } from './components/Listings/Buy/buy-index/buy-index.component';
import { BuyDetailsComponent } from './components/Listings/Buy/buy-details/buy-details.component';
import { RentIndexComponent } from './components/Listings/Rent/rent-index/rent-index.component';
import { RentCreateComponent } from './components/Listings/Rent/rent-create/rent-create.component';
import { RentDetailsComponent } from './components/Listings/Rent/rent-details/rent-details.component';
import { RentDeleteComponent } from './components/Listings/Rent/rent-delete/rent-delete.component';
import { MainPropIndexComponent } from './components/Listings/MainProp/main-prop-index/main-prop-index.component';
import { MainPropCreateComponent } from './components/Listings/MainProp/main-prop-create/main-prop-create.component';
import { MainPropUpdateComponent } from './components/Listings/MainProp/main-prop-update/main-prop-update.component';
import { MainPropDetailsComponent } from './components/Listings/MainProp/main-prop-details/main-prop-details.component';
import { MainPropDeleteComponent } from './components/Listings/MainProp/main-prop-delete/main-prop-delete.component';
import { BuyCreateComponent } from './components/Listings/Buy/buy-create/buy-create.component';
import { BuyUpdateComponent } from './components/Listings/Buy/buy-update/buy-update.component';
import { BuyDeleteComponent } from './components/Listings/Buy/buy-delete/buy-delete.component';
import { BuyIndexAdminComponent } from './Components/Listings/Buy/buy-index-admin/buy-index-admin.component';
import { BuyDetailsAdminComponent } from './Components/Listings/Buy/buy-details-admin/buy-details-admin.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  //{path: '**', component: HomeComponent},

  {path: 'ForSale',  children: [
    {path: '', component: BuyIndexComponent},
    {path: 'Create', component: BuyCreateComponent},
    {path: 'Update/:id', component: BuyUpdateComponent},
    {path: 'Delete/:id', component: BuyDeleteComponent},
    {path: 'Details/:id', component: BuyDetailsComponent},
    {path: 'Admin/List', component: BuyIndexAdminComponent},
    {path: 'Admin/Details/:id', component: BuyDetailsAdminComponent},
  ]},
  
  {path: 'ForRent', children: [
    {path: '', component: RentIndexComponent},
    {path: 'Create', component: RentCreateComponent},
    {path: 'Detail/:id', component: RentDetailsComponent},
    {path: 'Delete/:id', component: RentDeleteComponent}
  ]},
  
  {path: 'MainProp', children: [
    {path: '', component: MainPropIndexComponent },
    {path: 'Create', component: MainPropCreateComponent },
    {path: 'Update/:id', component: MainPropUpdateComponent },
    {path: 'Detail/:id', component: MainPropDetailsComponent },
    {path: 'Delete/:id', component: MainPropDeleteComponent }
      ]},
  
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
