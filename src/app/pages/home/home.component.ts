import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _toast:ToastrService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this._toast.success('Hello world!', 'Toastr fun!');
  }

}
