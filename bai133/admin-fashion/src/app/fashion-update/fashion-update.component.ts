import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { AdminFashionService } from '../services/admin-fashion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fashion-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent implements OnInit {
  fashion: Fashion = new Fashion(); // fashion data to update
  errMessage: string = '';
  fashionselected: Fashion = new Fashion(); // fashion selected with id
  id: string = ''; // id of fashion selected

  constructor(
    private _service: AdminFashionService, 
    private _router: Router,
    private _activeroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.loadFashion(this.id);
      } else {
        window.alert('Invalid fashion id to update');
        this._router.navigate(['/fashions']);
      }
    });
  }

  loadFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => {
        this.fashionselected = data;
        // Clone the data to fashion (working copy)
        this.fashion = { ...this.fashionselected };
      },
      error: (err) => {
        this.errMessage = err;
        console.error('Error loading fashion:', err);
      }
    });
  }

  public setFashion(f: Fashion) {
    this.fashion = { ...f };
  }

  // put fashion
  putFashion(fashionId: string) {
    if (this.validate(fashionId)) {
      // Nếu không có upload ảnh mới, giữ nguyên ảnh cũ
      if (!this.fashion.fashion_image || this.fashion.fashion_image === '') {
        this.fashion.fashion_image = this.fashionselected.fashion_image;
      }
      
      this._service.putFashion(this.fashion).subscribe({
        next: (data) => { this.success() },
        error: (err) => { 
          this.errMessage = err;
          console.error('Error updating fashion:', err);
        },
      });
    }
  }

  // search fashion - không cần thiết vì đã có loadFashion
  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashionselected = data },
      error: (err) => { this.errMessage = err },
    });
  }

  onFileSelected(event: any, fashion: Fashion) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        fashion.fashion_image = reader.result!.toString();
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  }

  // reset về giá trị ban đầu từ fashionselected
  reset() {
    this.fashion = { ...this.fashionselected };
    this.errMessage = '';
  }

  validate(fashionId: string) {
    // check if all fields are filled
    if (!this.fashion.style || this.fashion.style.trim() === '' || 
        !this.fashion.fashion_subject || this.fashion.fashion_subject.trim() === '' || 
        !this.fashion.fashion_detail || this.fashion.fashion_detail.trim() === '') {
      this.errMessage = 'Please fill all fields';
      return false;
    } else {
      // check if fashionId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
        this.errMessage = 'Invalid fashion id';
        return false;
      } else {
        this.errMessage = '';
        return true;
      }
    }
  }

  goBack() {
    this._router.navigate(['/fashions']);
  }

  success() {
    window.alert('Update fashion successfully');
    this.goBack();
  }
}