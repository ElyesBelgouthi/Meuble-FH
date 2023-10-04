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
import { ColorsListComponent } from './pages/admin-space/colors/colors-list/colors-list.component';
import { ColorsEditComponent } from './pages/admin-space/colors/colors-edit/colors-edit.component';
import { ItemsListComponent } from './pages/admin-space/items/items-list/items-list.component';
import { ItemsEditComponent } from './pages/admin-space/items/items-edit/items-edit.component';
import { OrdersListComponent } from './pages/admin-space/orders/orders-list/orders-list.component';
import { OrdersEditComponent } from './pages/admin-space/orders/orders-edit/orders-edit.component';
import { CartConfirmationComponent } from './pages/cart/cart-confirmation/cart-confirmation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  {
    path: 'cart',
    component: CartComponent,
    children: [{ path: 'confirmation', component: CartConfirmationComponent }],
  },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminSpaceComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'colors',
        component: ColorsComponent,
        children: [
          { path: '', component: ColorsListComponent },
          { path: 'new', component: ColorsEditComponent },
          { path: ':id/edit', component: ColorsEditComponent },
        ],
      },
      {
        path: 'items',
        component: ItemsComponent,
        children: [
          { path: '', component: ItemsListComponent },
          { path: 'new', component: ItemsEditComponent },
          { path: ':id/edit', component: ItemsEditComponent },
        ],
      },
      {
        path: 'orders',
        component: OrdersComponent,
        children: [
          { path: '', component: OrdersListComponent },
          { path: ':id', component: OrdersEditComponent },
        ],
      },
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
