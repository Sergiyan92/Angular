import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductServises } from './services/products.services';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular';
  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;

  constructor(private productServises: ProductServises) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productServises
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productServises.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
