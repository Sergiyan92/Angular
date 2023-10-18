import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, delay, retry, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductServises {
  constructor(private http: HttpClient, private errorService: ErrorService) {}
  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromString: 'limit=5',
        }),
      })
      .pipe(
        delay(200),
        retry(2),
        tap((products: IProduct[]) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((prod) => this.products.push(prod)));
  }
  delete(id: number): Observable<any> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.delete(url).pipe(
      tap(() => {
        this.products = this.products.filter((product) => product.id !== id);
      }),
      catchError(this.errorHandler.bind(this))
    );
  }
}
