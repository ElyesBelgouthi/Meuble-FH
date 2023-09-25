import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminSpaceComponent } from './pages/admin-space/admin-space.component';
import { ItemsComponent } from './pages/admin-space/items/items.component';
import { ColorsComponent } from './pages/admin-space/colors/colors.component';
import { OrdersComponent } from './pages/admin-space/orders/orders.component';
import { DashboardComponent } from './pages/admin-space/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminSpaceComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'orders', component: OrdersComponent },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
