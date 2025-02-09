import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding-event.component.html',
  styleUrl: './binding-event.component.css'
})
export class BindingEventComponent {
  onClick(event:any){
  alert(event.pointerId)
  }
  onSubmit(value:string){
  alert(value)
  }
// Biến lưu giá trị nhập vào
public a: number = 0;
public b: number = 0;
public result: string = '';

// Các phương thức xử lý phép toán
add() {
  this.result = `Kết quả: ${this.a} + ${this.b} = ${this.a + this.b}`;
}

subtract() {
  this.result = `Kết quả: ${this.a} - ${this.b} = ${this.a - this.b}`;
}

multiply() {
  this.result = `Kết quả: ${this.a} * ${this.b} = ${this.a * this.b}`;
}

divide() {
  if (this.b === 0) {
    this.result = 'Lỗi: Không thể chia cho 0!';
  } else {
    this.result = `Kết quả: ${this.a} / ${this.b} = ${(this.a / this.b).toFixed(2)}`;
  }
}

clear() {
  this.a = 0;
  this.b = 0;
  this.result = '';
}
}
