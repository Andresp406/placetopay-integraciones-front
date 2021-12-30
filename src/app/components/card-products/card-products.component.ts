import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from '../../services/auth.service';
import { IResponseProduct, IProductData, Product } from '../../interfaces/products';
import { IUser } from 'src/app/interfaces/login';
import { IResponseUserLogued } from '../../interfaces/login';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  products : Product [] =[];
  user!:IUser;

  
  constructor(
    private _auth:AuthService,
    private _product: ProductsService,

    ) { }
 

    get isAuth(): boolean {
      return this._auth.checkLogued();
    }
    
    ngOnInit(): void {
    this.getAllProducts();
    }
    
    getAllProducts(){
      this._product.getAllProduct('').subscribe((resp:IResponseProduct) =>{
        this.products = resp.data.products;
      });

      this._auth.userLogued().subscribe((resp:IResponseUserLogued) => {
        this.user = resp.data;
      })
}


}
