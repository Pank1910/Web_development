import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService1Component } from './product-service1/product-service1.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductSearchComponent,
    ProductService1Component,
    ServiceProductHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
