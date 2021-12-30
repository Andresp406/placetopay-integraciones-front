import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IDataCheckoutUser } from '../components/modals/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class PlacetopayService {

  constructor(
    private _http:HttpClient,
    private _auth:AuthService
  ) { }

  connectGateWay(body:IDataCheckoutUser):Observable<any>{
    const headers= this._auth.headers;
    const url = `${environment.url_base}/api/v1/sale/?search`;
    return this._http.post<any>(url, body, {headers});
  }


  responseGateway(reference:number){
    const headers= this._auth.headers;
    const url = `${environment.url_base}/api/v1/sale/my-sales`;
    return this._http.get<any>(url, {headers});
  }

  connectGatewayPse(){
     const headers = this._auth.headers;
     const url = `${environment.url_base}/api/v1/sale/pse`;
     return this._http.get<any>(url, {headers})
  }
}
