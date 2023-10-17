import { Component } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { ProductServises } from 'src/app/services/products.services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  title = 'Angular';
  // products: IProduct[] = [];
  loading = false;

  term = '';

  constructor(
    public productServises: ProductServises,
    public modalServices: ModelService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productServises
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productServises.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
