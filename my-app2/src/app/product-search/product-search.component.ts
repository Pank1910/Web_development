import { Component } from '@angular/core';
@Component({
  selector: 'app-product-search',
  standalone: false,
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  public products=this.gen_products()
  public minprice:any
  public maxprice:any
  searchProduct() {
    let dataset = this.gen_products();
    // Lọc sản phẩm theo khoảng giá
    this.products = dataset.filter(product => {
      // Kiểm tra nếu không nhập giá thì return tất cả
      if (!this.minprice && !this.maxprice) {
        return true;
      }
      
      // Kiểm tra theo khoảng giá
      if (this.minprice && this.maxprice) {
        return product.price >= this.minprice && product.price <= this.maxprice;
      }
      
      // Kiểm tra chỉ có minprice
      if (this.minprice) {
        return product.price >= this.minprice;
      }
      
      // Kiểm tra chỉ có maxprice 
      if (this.maxprice) {
        return product.price <= this.maxprice;
      }
      
      return true;
    });
  }
  gen_products(){
    return [
      {"id":"p1","name":"Product 1","price":100,"image":"h1.png"},
      {"id":"p2","name":"Product 2","price":200,"image":"h2.png"},
      {"id":"p3","name":"Product 3","price":300,"image":"h3.png"},
      {"id":"p4","name":"Product 4","price":400,"image":"h4.png"},
      {"id":"p5","name":"Product 5","price":500,"image":"h5.png"},
    ]
  }
}
