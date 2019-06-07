import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';
import { BuyIndexComponent } from './components/Listings/Buy/buy-index/buy-index.component';
import { RentIndexComponent } from './components/Listings/Rent/rent-index/rent-index.component';
import { BuyDetailsComponent } from './components/Listings/Buy/buy-details/buy-details.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "Login", component: LoginComponent},
  {path: "Register", component: RegisterComponent},
  {path: "ForSaleList", component: BuyIndexComponent},
  {path: "ForRentList", component: RentIndexComponent},
  {path: "ForSaleDetail/:id", component: BuyDetailsComponent},

  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
