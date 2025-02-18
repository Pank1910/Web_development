import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService1Component } from './product-service1.component';

describe('ProductService1Component', () => {
  let component: ProductService1Component;
  let fixture: ComponentFixture<ProductService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductService1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
