import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private _http:HttpClient,
    private _auth:AuthService
  ) { }

  getAllOrders(){
    const headers = this._auth.headers;
    const url = `${environment.url_base}/api/v1/sale/my-sales`;
    return this._http.get<any>(url, {headers});
  }
}
