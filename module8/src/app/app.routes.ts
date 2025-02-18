import { Routes } from '@angular/router';
import { Bai88Component } from './bai88/bai88.component';
import { Bai87Component } from './bai87/bai87.component';
import { Bai86Component } from './bai86/bai86.component';
export const routes: Routes = [
    { path: 'bai-86', component: Bai86Component},
    { path: 'bai-87', component: Bai87Component},
    { path: 'bai-88', component: Bai88Component},
];
