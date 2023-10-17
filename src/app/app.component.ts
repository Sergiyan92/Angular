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
export class AppComponent {}
