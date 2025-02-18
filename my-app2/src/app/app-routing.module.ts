import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService1Component } from './product-service1/product-service1.component';

const routes: Routes = [
  {path:"product-simple",component:ProductComponent},
  {path:"product-search",component:ProductSearchComponent},
  {path:"product-service1",component:ProductService1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
