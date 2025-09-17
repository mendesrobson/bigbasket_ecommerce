import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Cart } from './pages/admin/cart/cart';
import { Categories } from './pages/admin/categories/categories';
import { Customer } from './pages/admin/customer/customer';
import { Order } from './pages/admin/order/order';
import { Products } from './pages/admin/products/products';
import { Landing } from './pages/website/landing/landing';
import { CategoryProducts } from './pages/website/category-products/category-products';
import { CustomerCart } from './pages/website/customer-cart/customer-cart';
import { Checkout } from './pages/website/checkout/checkout';
import { CustomerOrders } from './pages/website/customer-orders/customer-orders';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Login,
    Layout,
    Cart,
    Categories,
    Customer,
    Order,
    Products,
    Landing,
    CategoryProducts,
    CustomerCart,
    Checkout,
    CustomerOrders
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
