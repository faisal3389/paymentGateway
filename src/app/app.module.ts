import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainRoutingModule } from './app.routes';
import { InstamojoService } from './instamojo.service';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MainRoutingModule
  ],
  providers: [
    InstamojoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
