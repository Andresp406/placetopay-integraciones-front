import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth:boolean=true;

  constructor(
    private _toast:ToastrService,
    private _auth:AuthService
    ) { }

  ngOnInit(): void {
  }

  logOut(){
    console.log('cerro');
    this._toast.success('session cerrada!!', '', {timeOut:1000})
  }



 

}
