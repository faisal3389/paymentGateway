import {
  Injectable,
  Inject,
  EventEmitter
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstamojoService {

  constructor(
    private _http: Http
  ) { }

  /**
   * to create payment request, this will generate the payment ID.
   */
  public createRequest() {
    const headers = {
      'X-Api-Key': 'd82016f839e13cd0a79afc0ef5b288b3',
      'X-Auth-Token': '3827881f669c11e8dad8a023fd1108c2'
    };
    const url = 'https://www.instamojo.com/api/1.1/payment-requests/';
    const payload = {
      purpose: 'FIFA 16',
      amount: '2500',
      phone: '9999999999',
      buyer_name: 'John Doe',
      redirect_url: 'http://www.example.com/redirect/',
      send_email: true,
      webhook: 'http://www.example.com/webhook/',
      send_sms: true,
      email: 'foo@example.com',
      allow_repeated_payments: false
    };
    const options = new RequestOptions({
      headers: new Headers(headers)
    });
    return this._http.post(url, payload, options).map((res) => {
      console.log('request created, res = ', res);
    }, err => {
      console.log(err);
    });
  }

  /**
   * get call to fetch details fo the payments with a given ID.
   * @param id
   */
  getPaymentDetails(id) {
    const url = 'https://www.instamojo.com/api/1.1/payments/' + id;
    const headers = {
      'X-Api-Key': 'd82016f839e13cd0a79afc0ef5b288b3',
      'X-Auth-Token': '3827881f669c11e8dad8a023fd1108c2'
    };
    const options = new RequestOptions({
      headers: new Headers(headers)
    });
    return this._http.get(url, options)
    .map(resp => {
      return resp;
    }, err => {
      console.log(err);
    });
  }
}
