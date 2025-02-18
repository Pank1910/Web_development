import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bai87',
  imports: [CommonModule, FormsModule],
  templateUrl: './bai87.component.html',
  styleUrl: './bai87.component.css'
})
export class Bai87Component {
  products: any[] = [
    { id: 'P1', name: 'Coca Cola', price: 15000, img: '/assets/images/cocacola.png' },
    { id: 'P2', name: 'Pepsi', price: 18000, img: 'assets/images/pepsi.png' },
    { id: 'P33', name: 'Heniken', price: 20000, img: 'assets/images/heniken.png' }
  ];
}
