import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideComponent } from './components/slide/slide.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ColorSearchPipe } from './pipes/color-search.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminSpaceComponent } from './pages/admin-space/admin-space.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/admin-space/dashboard/dashboard.component';
import { ItemsComponent } from './pages/admin-space/items/items.component';
import { ColorsComponent } from './pages/admin-space/colors/colors.component';
import { OrdersComponent } from './pages/admin-space/orders/orders.component';
import { OrdersListComponent } from './pages/admin-space/orders/orders-list/orders-list.component';
import { OrdersEditComponent } from './pages/admin-space/orders/orders-edit/orders-edit.component';
import { ColorsEditComponent } from './pages/admin-space/colors/colors-edit/colors-edit.component';
import { ColorsListComponent } from './pages/admin-space/colors/colors-list/colors-list.component';
import { ItemsListComponent } from './pages/admin-space/items/items-list/items-list.component';
import { ItemsEditComponent } from './pages/admin-space/items/items-edit/items-edit.component';
import { ItemSearchPipe } from './pipes/item-search.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
import { CartConfirmationComponent } from './pages/cart/cart-confirmation/cart-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideComponent,
    TruncatePipe,
    ColorSearchPipe,
    FooterComponent,
    CatalogueComponent,
    CardComponent,
    DetailsComponent,
    CartComponent,
    AdminSpaceComponent,
    LoginComponent,
    DashboardComponent,
    ItemsComponent,
    ColorsComponent,
    OrdersComponent,
    OrdersListComponent,
    OrdersEditComponent,
    ColorsEditComponent,
    ColorsListComponent,
    ItemsListComponent,
    ItemsEditComponent,
    ItemSearchPipe,
    LoaderComponent,
    ScrollToBottomDirective,
    CartConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
