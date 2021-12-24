import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardProductsComponent } from './card-products/card-products.component';
import { ModalModule } from './modals/modal.module';




@NgModule({
  declarations: [
    FooterComponent,
    CardProductsComponent,
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModalModule
  ],
  exports:[
    FooterComponent,
    CardProductsComponent
  ]
})
export class ComponentModule { }
