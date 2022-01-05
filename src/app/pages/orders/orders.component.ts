import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders :any []= [];
  page:number = 0;
  pag:number = 1;
  status:string='';
  url:string='';
 

  constructor(
    private _order:OrderService,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {    
    this.getAllOrders();
  }

  getAllOrders(){
    this.spinner.show();
    this._order.getAllOrders().subscribe(resp=>{
      this.spinner.hide();
      console.log(resp)
      this.orders = resp.data;
     
      this.url =  localStorage.getItem('url') || '';
    }, err => {
      console.log(err);
      this.spinner.hide();

    })
  }

  nextPage(){
    this.page += 5;
    this.pag += 1; 

  }

  previousPage(){
    if(this.page > 0){
      this.page -= 5;
      this.pag -= 1; 

    }
  }


  

}
