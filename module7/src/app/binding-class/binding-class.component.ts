import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-binding-class',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binding-class.component.html',
  styleUrl: './binding-class.component.css'
})
export class BindingClassComponent {
  public success="text-success"
  public error="text-error"
  public primary="text-primary"
  public normal="text-normal"
  public multiClass={
  "text-primary":true,
  "text-normal":true,
  "text-error":true
  };
  public complexity = 'text-complexity'
  }
