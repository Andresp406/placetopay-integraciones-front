import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient
  ) { }

  get getToken(): string {
    return localStorage.getItem('x-token') || '';
  }
  
  check():Observable<any> {
    const headers = this._getHeaders();
    const url = ``;
    return this._http.get<any>(url, {headers});
  }

  private _getHeaders(): HttpHeaders {
    const token = this.getToken

    if (token.length < 10) {
     // this.removeCurrentUser();
      return new HttpHeaders();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })

    return headers;
  }
}
