import { Component, OnInit } from '@angular/core';
import { InstamojoService } from '../instamojo.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private _instaServ: InstamojoService
  ) { }

  ngOnInit() {
    console.log('in payment component');
    this._instaServ.createRequest().subscribe(res => {
      console.log('create req called in component, res = ', res);
    });
  }

}
