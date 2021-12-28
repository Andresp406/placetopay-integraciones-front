import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private _toast:ToastrService,
    private _auth:AuthService,
    private _router: Router,

    ) { }

  ngOnInit(): void {
    console.log(this.isAuth)
  }

  get isAuth(): boolean {
    return this._auth.checkLogued();
  }
  
  logOut() {
    this._auth.removeCurrentUser();
    this._router.navigate(['/'])
    this._toast.warning("Goodbye!", '', {
      timeOut: 1000,
    
    })
  }
 



 

}
