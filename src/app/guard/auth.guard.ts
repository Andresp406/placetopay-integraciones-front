import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resp, reject) => {
      this._authService.check()
        .subscribe((response: any) => {
          //console.log(response)
          resp(true)
        }, err => {
          console.log(err);
          resp(false);
         //x this._authService.removeCurrentUser()
          this._router.navigate(['/']);
        })
    })
  }
}
