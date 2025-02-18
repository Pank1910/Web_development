import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai88Component } from './bai88/bai88.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: Bai88Component },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
