import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Thêm RouterLink

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Thêm RouterLink vào imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true // Thêm standalone: true nếu đang sử dụng cách tiếp cận standalone
})
export class AppComponent {
  title = 'client-fashion';
}