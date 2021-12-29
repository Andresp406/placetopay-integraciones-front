import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders :any []= [];
  constructor(
    private _order:OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this._order.getAllOrders('').subscribe(resp=>{
      this.orders = resp.data;
    })
  }


  

}
