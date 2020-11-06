import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { yearData } from './yearsData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  yearValues = yearData;
  spaceXProducts = [];
  loader = false;
  filteredYear: string;
  constructor(private productsService: ProductsService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getSpaceXProduct(100);
  }

  getSpaceXProduct = (
    limit?: any,
    launchSuccess?: any,
    landSuccess?: any,
    launchYear?: any
  ) => {
    this.loader = true;
    this.productsService
      .getSpaceXProduct(limit, launchSuccess, landSuccess, launchYear)
      .subscribe((response) => {
        if (response) {
          this.loader = false;
          this.spaceXProducts = response;
        }
      });
  };

  filterSpaceXProduct = (filterType, filterValue) => {
    console.log('check', filterType);

    if (filterType === 'year') {
      this.filteredYear = filterValue;
      this.getSpaceXProduct(100, filterValue);
    } else if (filterType === 'successful_launch') {
      this.getSpaceXProduct(100, filterValue);
    } else if (filterType === 'successful_landing') {
      this.getSpaceXProduct(100, filterValue);
    }
  };
}
