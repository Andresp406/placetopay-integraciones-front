import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  isAuth:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
