import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerViewListComponent } from './customer-view-list/customer-view-list.component';
import { HomeComponent } from './home/home.component';
import { SalesProductListComponent } from './sales-product-list/sales-product-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginFormComponent,
    ContactUsComponent,
    CustomerViewListComponent,
    SalesProductListComponent,
    HomeComponent,
  ],
  providers: [AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
