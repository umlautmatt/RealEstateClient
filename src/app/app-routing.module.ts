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

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'ForSaleList', component: BuyIndexComponent},
  {path: 'ForRentList', component: RentIndexComponent},
  {path: 'MainProp', children: [
  {path: '', component: MainPropIndexComponent },
  {path: 'Create', component: MainPropCreateComponent }
    ]},
  {path: "ForSaleDetail/:id", component: BuyDetailsComponent},
  {path: "**", component: RegisterComponent}
];

@NgModule({
  declarations:[
    MainPropIndexComponent,
    MainPropCreateComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
