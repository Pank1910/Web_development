import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
@Component({
  selector: 'app-directive',
  imports: [CommonModule, Comp1Component, Comp2Component],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  show: boolean = false

  showComp: string = ""

  framework: string = "angular"

  frameworks = ["Angular", "React", "Vue", "Next"]

  products = [
    {
      code: 1,
      name: 'Heineken',
      price: 21000
    },
    {
      code: 2,
      name: 'Tiger',
      price: 18000
    },
    {
      code: 3,
      name: 'Sapporo',
      price: 25000
    },
  ]

  changeView(){
    this.show = !this.show
  }

  showComp1(){
    this.showComp = "Comp1"
  }

  showComp2(){
    this.showComp = "Comp2"
  }
}
