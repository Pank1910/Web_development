import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bai88',
  imports: [CommonModule, FormsModule],
  templateUrl: './bai88.component.html',
  styleUrl: './bai88.component.css'
})
export class Bai88Component implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  viewDetail(product: any) {
    this.router.navigate(['/product-detail', product.id]);
  }
}
