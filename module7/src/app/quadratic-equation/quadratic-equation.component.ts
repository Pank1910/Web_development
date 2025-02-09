import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quadratic-equation',
  imports: [FormsModule],
  templateUrl: './quadratic-equation.component.html',
  styleUrl: './quadratic-equation.component.css'
})
export class QuadraticEquationComponent {
  public a: string = '';
  public b: string = '';
  public c: string = '';
  public result: string = '';

  solveEquation() {
    const aNum = parseFloat(this.a);
    const bNum = parseFloat(this.b);
    const cNum = parseFloat(this.c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      this.result = "Vui lòng nhập số hợp lệ!";
      return;
    }

    if (aNum === 0) {
      this.result = bNum !== 0 ? `Nghiệm: x = ${-cNum / bNum}` : "Vô nghiệm";
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      this.result = "Phương trình vô nghiệm";
    } else if (delta === 0) {
      const x = -bNum / (2 * aNum);
      this.result = `Nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      this.result = `Nghiệm: x₁ = ${x1}, x₂ = ${x2}`;
    }
  }

  clearFields() {
    this.a = '';
    this.b = '';
    this.c = '';
    this.result = '';
  }
}
