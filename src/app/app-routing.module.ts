import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';
import { BuyIndexComponent } from './components/Listings/Buy/buy-index/buy-index.component';
import { RentIndexComponent } from './components/Listings/Rent/rent-index/rent-index.component';
import { MainPropIndexComponent } from './components/Listings/MainProp/main-prop-index/main-prop-index.component';
import { MainPropCreateComponent } from './components/Listings/MainProp/main-prop-create/main-prop-create.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'ForSaleList', component: BuyIndexComponent},
  {path: 'ForRentList', component: RentIndexComponent},
  {path: 'MainProp', children: [
    { path: '', component: MainPropIndexComponent },
    { path: 'create', component: MainPropCreateComponent }
  ]
},
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
