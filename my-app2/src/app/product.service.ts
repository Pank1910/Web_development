import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
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
