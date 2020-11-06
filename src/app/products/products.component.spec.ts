import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductsComponent
      ],
    }).compileComponents();
  });

  it('should create the products', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const products = fixture.componentInstance;
    expect(products).toBeTruthy();
  });
});
