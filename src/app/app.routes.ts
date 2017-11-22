import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';

/**pages */
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';

export const mainRouting: Routes = [
  { path: '', component : HomeComponent },
  { path: 'payment', component : PaymentComponent }
];

@NgModule({
  imports : [ RouterModule.forRoot(mainRouting)],
  exports : [ RouterModule ]
})

export class MainRoutingModule {

}
