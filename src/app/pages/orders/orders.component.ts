import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders :any []= [];
  page:number = 0;
  pag:number = 1;
  constructor(
    private _order:OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dataUser){
      const change = changes.dataUser.currentValue;
      //this.dataCustomers.push(change);
    }
 
  }

  getAllOrders(){
    this._order.getAllOrders('').subscribe(resp=>{
      this.orders = resp.data;
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
