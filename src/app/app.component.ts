import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductServises } from './services/products.services';
import { Observable, tap } from 'rxjs';
import { ModelService } from './services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
