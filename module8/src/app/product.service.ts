import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products= [
    { id: 1, name: 'Coca Cola', price: 15000, img: 'assets/images/cocacola.png' },
    { id: 2, name: 'Pepsi', price: 18000, img: 'assets/images/pepsi.png' },
    { id: 3, name: 'Heniken', price: 20000, img: 'assets/images/heniken.png' }
  ];
  

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
