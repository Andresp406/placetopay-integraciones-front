import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { IResponseProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http:HttpClient,
    private _auth:AuthService
  ) { }

  getAllProduct(search:string):Observable<IResponseProduct>{
    const headers = this._auth.headers;
    const url = `${environment.url_base}/api/v1/product/all?search=${search}`;
    return this._http.get<IResponseProduct>(url, {headers});
  }

}
