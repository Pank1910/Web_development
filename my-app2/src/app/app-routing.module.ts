import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService1Component } from './product-service1/product-service1.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';

const routes: Routes = [
  {path:"product-simple",component:ProductComponent},
  {path:"product-search",component:ProductSearchComponent},
  {path:"product-service1",component:ProductService1Component},
  {path:"product-service2",component:ServiceProductHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
