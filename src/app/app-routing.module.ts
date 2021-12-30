import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orders/:reference',
    component: OrdersComponent
  },
  {
    path: 'orders/',
    component: OrdersComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
