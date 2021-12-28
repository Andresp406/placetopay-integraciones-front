import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin, IResponseLogin, ISetDataLocalStorage } from '../interfaces/login';
import { IDataRegister, IResponseRegister, IUserRegister } from '../interfaces/register';

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

  get getCurrentUser(): any  {
    return JSON.parse(localStorage.getItem('user') || '');
  }

  get currentID(): number  {
    return this.getCurrentUser.id
  }

  get headers(): HttpHeaders {
    return this._getHeaders();
  }

  setUserLocalStorage(data: ISetDataLocalStorage): void {
    localStorage.setItem('x-token', data['x-token']);
    localStorage.setItem('user', JSON.stringify(data.user));
  }


  register(data:IUserRegister):Observable<IResponseRegister>{
    const headers = this._getHeaders();
    const url = `${environment.url_base}/api/v1/register`;
    return this._http.post<IResponseRegister>(url, data ,{headers});
  }

  login(user: ILogin):Observable<IResponseLogin>{
    const headers = this._getHeaders();
    const url =  `${environment.url_base}/api/v1/login`;
    return this._http.post<IResponseLogin>(url, user, {headers});
  }

  checkLogued() {
    const token = localStorage.getItem('x-token') || false;
    const userLogued = localStorage.getItem('user') || false;

    return token && userLogued ? true : false;
  }
  
  check():Observable<any> {
    const headers = this._getHeaders();
    const url = ``;
    return this._http.get<any>(url, {headers});
  }

  private _getHeaders(): HttpHeaders {
    const token = this.getToken

    if (token.length < 10) {
      this.removeCurrentUser();
      return new HttpHeaders();
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })

    return headers;
  }

  removeCurrentUser(): boolean {
    localStorage.removeItem('x-token');
    localStorage.removeItem('user');

    return true;
  }

}
