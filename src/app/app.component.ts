import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'placetopay-front';

  constructor(private _toast:ToastrService){

  }

  showSuccess() {
    this._toast.success('Hello world!', 'Toastr fun!');
  }


}
