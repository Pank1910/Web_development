import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-detail',
  standalone: false,
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent {
  fashionObject:any
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  }
  searchFashion(fashionId:string)
  {
    this._service.getFashion(fashionId).subscribe({
    next:(data:any)=>{this.fashionObject=data},
    error:(err:any)=>{this.errMessage=err}
  })
  }
}
