import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { AdminFashionService } from '../services/admin-fashion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Nếu bạn muốn sử dụng CKEditor, hãy import nó:
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-fashion-new',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    // CKEditorModule // Thêm CKEditorModule nếu bạn muốn sử dụng
  ],
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css']
})
export class FashionNewComponent {
  fashion = new Fashion();
  errMessage: string = '';
  // public Editor = ClassicEditor; // Nếu bạn muốn sử dụng CKEditor

  constructor(private _service: AdminFashionService, private _router: Router) { 
    // Khởi tạo đối tượng fashion để tránh lỗi undefined
    this.fashion = {
      _id: '',
      style: '',
      fashion_subject: '',
      fashion_detail: '',
      fashion_image: '',
      date_added: new Date()
    };
  }

  public setFashion(f: Fashion) {
    this.fashion = f;
  }

  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postFashion() {
    if (this.fashion.style == '' || this.fashion.fashion_subject == '' || this.fashion.fashion_detail == '') {
      this.invalidFashion();
    } else {
      // Đảm bảo không gửi _id rỗng lên server
      const fashionToSend = { ...this.fashion };
      if (!fashionToSend._id || fashionToSend._id === '') {
        delete fashionToSend._id; // Xóa trường _id nếu nó rỗng để MongoDB tự tạo
      }
      
      this._service.postFashion(fashionToSend).subscribe({
        next: (data) => {
          // Đảm bảo cập nhật lại fashion với dữ liệu đã có _id từ server
          this.fashion = data;
          this.success();
        },
        error: (err) => { this.errMessage = err }
      });
    }
  }

  invalidFashion() {
    this.errMessage = 'Invalid fashion. Full information is required';
  }

  success() {
    window.alert('Fashion successfully posted');
    this.cancel();
  }

  cancel() {
    this._router.navigate(['/fashions']);
  }
}