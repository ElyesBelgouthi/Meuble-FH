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
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminSpaceComponent } from './pages/admin-space/admin-space.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/admin-space/dashboard/dashboard.component';
import { ItemsComponent } from './pages/admin-space/items/items.component';
import { ColorsComponent } from './pages/admin-space/colors/colors.component';
import { OrdersComponent } from './pages/admin-space/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideComponent,
    TruncatePipe,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
