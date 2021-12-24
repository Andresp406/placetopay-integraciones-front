import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardProductsComponent } from './card-products/card-products.component';




@NgModule({
  declarations: [
    FooterComponent,
    CardProductsComponent,
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    FooterComponent,
    CardProductsComponent
  ]
})
export class ComponentModule { }
