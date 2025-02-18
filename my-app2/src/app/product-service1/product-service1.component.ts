import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-service1',
  standalone: false,
  templateUrl: './product-service1.component.html',
  styleUrl: './product-service1.component.css'
})
export class ProductService1Component {
  public products:any
  constructor(private ps:ProductService){
    this.products=ps.gen_products
  }
}
