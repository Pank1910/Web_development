import { Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionComponent } from './fashion/fashion.component';

export const routes: Routes = [ // Thêm 'export' vào đây
  { path: '', redirectTo: 'fashions', pathMatch: 'full' },
  { path: 'fashions', component: FashionComponent },
  { path: 'fashions/new', component: FashionNewComponent },
  { path: 'fashions/edit/:id', component: FashionUpdateComponent },
  { path: 'fashions/detail/:id', component: FashionDetailComponent },
  { path: '**', redirectTo: 'fashions' }
];
