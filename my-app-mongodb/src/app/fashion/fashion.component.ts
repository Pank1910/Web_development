import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
selector: 'app-fashion',
standalone: false,
templateUrl: './fashion.component.html',
styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
fashions:any;
errMessage:string=''
constructor(public _service: FashionAPIService, private router: Router){
this._service.getFashions().subscribe({
next:(data)=>{this.fashions=data},
error:(err)=>{this.errMessage=err}
})
}
    navigateToFashion(id: string) {
    this.router.navigate(['/fashions', id]); // Đúng với đường dẫn trong routes
  }
  
}