import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  standalone: true,
  template: `
    <div>
      <label [for]="nameid">Name:</label>
      <input [id]="nameid" [value]="name" /><br>

      <label [for]="emailid">Email:</label>
      <input [id]="emailid" [value]="email" [disabled]="isDisabled" /><br>

      <p>Email hiển thị: {{ email }}</p>

      <button (click)="toggleDisabled()">Bật/Tắt Email</button>
    </div>
  `
})
export class BindingPropertyComponent {
  public name: string = "Trần Duy Thanh";
  public email: string = "thanhtd@uel.edu.vn";
  public nameid: string = "nameid";
  public emailid: string = "emailid";
  public isDisabled: boolean = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
