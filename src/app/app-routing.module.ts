import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './authentication/authentication.guard';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerViewListComponent } from './customer-view-list/customer-view-list.component';
import { SalesProductListComponent } from './sales-product-list/sales-product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'customer-view-list',
    component: CustomerViewListComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'sales-product-list', component: SalesProductListComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
