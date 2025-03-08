// app.routes.ts - tạo file mới
import { Routes } from '@angular/router';

// Import các components
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';

// Export routes
export const routes: Routes = [
  { path: '', redirectTo: 'fashions/style', pathMatch: 'full' },
  { path: 'fashions/style', component: ClientFashionComponent },
  { path: 'fashions/detail/:id', component: ClientFashionDetailComponent },
  { path: '**', redirectTo: 'fashions/style' }
];