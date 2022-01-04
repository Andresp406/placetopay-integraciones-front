import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentModule } from '../components/component.module';
import { ModalModule } from '../components/modals/modal.module';
import { OrdersComponent } from './orders/orders.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    ComponentModule,
    ModalModule,
    NgxSpinnerModule
  ]
})
export class PageModule { }
