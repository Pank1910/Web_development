import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding-two-way.component.html',
  styleUrl: './binding-two-way.component.css'
})
export class BindingTwoWayComponent {
  public name:string=''
  public address:string=''
  public email: string = '';
  public phone: string = '';
  setDefaultAddress(){
  this.address='13 đường Hùng Vương'
  };

  }
