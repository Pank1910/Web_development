import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { ClientFashionService } from '../services/client-fashion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-fashion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-fashion.component.html',
  styleUrls: ['./client-fashion.component.css']
})
export class ClientFashionComponent implements OnInit {
  style: string = '';
  styles: string[] = []; // distinct styles
  allFashions: Fashion[] = []; // lưu trữ tất cả fashions
  selectedStyleFashions: Fashion[] = []; // fashions by style
  fashion: any; // fashion selected
  errMessage: string = '';
  filteredFashions: Fashion[] = [];
  searchText: string = '';

  constructor(
    private _service: ClientFashionService, 
    private _router: Router, 
    private _activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadFashions();
    
    // Check for style parameter in URL
    this._activeRoute.params.subscribe(params => {
      this.style = params['style'];
      if (this.style != null) {
        this.getFashionsByStyle(this.style);
      }
    });
  }

  loadFashions() {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.allFashions = data;
        this.filteredFashions = [...this.allFashions]; // Clone the array
        this.extractStyles();
      },
      error: (err) => {
        console.error('Error fetching fashions:', err);
        this.errMessage = err.message || 'Failed to load fashions';
      }
    });
  }

  extractStyles() {
    // Extract unique styles and add "All Style" option at the beginning
    const styleSet = new Set<string>();
    
    // Add "All Style" as the first option
    styleSet.add("All Style");
    
    // Add all other styles from the data
    this.allFashions.forEach(fashion => {
      if (fashion.style) {
        styleSet.add(fashion.style);
      }
    });
    
    // Convert to array and sort
    this.styles = Array.from(styleSet).sort((a, b) => {
      if (a === "All Style") return -1;
      if (b === "All Style") return 1;
      if (a.toLowerCase().includes('street')) return -1;
      if (b.toLowerCase().includes('street')) return 1;
      if (a.toLowerCase().includes('trend')) return -1;
      if (b.toLowerCase().includes('trend')) return 1;
      return a.localeCompare(b);
    });
  }
  
  searchFashions() {
    if (!this.searchText.trim()) {
      // If search is empty, show all fashions
      this.filteredFashions = [...this.allFashions];
      return;
    }
    
    // Check if the searchText matches exactly with a style
    const matchingStyle = this.styles.find(style => 
      style.toLowerCase() === this.searchText.toLowerCase()
    );
    
    if (matchingStyle) {
      // If it's a style, filter by that style
      if (matchingStyle === "All Style") {
        this.filteredFashions = [...this.allFashions];
      } else {
        this.filteredFashions = this.allFashions.filter(fashion => 
          fashion.style === matchingStyle
        );
      }
    } else {
      // Otherwise, do the regular search
      this.filteredFashions = this.allFashions.filter((fashion: Fashion) => 
        (fashion.fashion_subject?.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (fashion.fashion_detail?.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (fashion.style?.toLowerCase().includes(this.searchText.toLowerCase()))
      );
    }
  }

  getFilteredFashionsByStyle(style: string): Fashion[] {
    // Get filtered fashions by style
    return this.filteredFashions.filter(fashion => 
      fashion.style?.toLowerCase() === style.toLowerCase()
    );
  }
  
  selectStyle() {
    if (this.style === 'All Style') {
      this.fashion = this.allFashions;
    } else {
      this.getFashionsByStyle(this.style);
    }
  }

  // get all fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { 
        this.allFashions = data; 
        this.filteredFashions = [...this.allFashions];
        this.extractStyles(); 
      },
      error: (err) => { 
        console.error('Error fetching fashions:', err);
        this.errMessage = err; 
      }
    });
  }

  // Lọc fashion theo style từ allFashions
  getFashionsByStyle(style: string) {
    if (style === 'All Style') {
      this.fashion = this.allFashions; // Hiển thị tất cả
      this.filteredFashions = [...this.allFashions];
    } else {
      this._service.getFashionsByStyle(style).subscribe({
        next: (data) => { 
          this.fashion = data; 
          this.filteredFashions = this.fashion;
        },
        error: (err) => { this.errMessage = err }
      });
    }
  }

  // route to fashion detail page
  detailFashion(fashionId: string) {
    this._router.navigate(['/fashions/detail', fashionId]);
  }

  // route to fashions by style page
  fashionsByStyle(style: string) {
    if (style === 'All Style') {
      // Nếu là "All Style", nạp tất cả fashion
      this.getFashions();
    } else {
      // Ngược lại, điều hướng đến trang style
      this._router.navigate(['/fashions/style', style]);
    }
  }
}