import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelService } from 'src/app/services/model.service';
import { ProductServises } from 'src/app/services/products.services';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productServices: ProductServises,
    private modalServices: ModelService
  ) {}
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {
    // Initialization logic can be added here if required
  }

  submit() {
    this.productServices
      .create({
        id: 5,
        title: this.form.value.title as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 40,
          count: 2,
        },
      })
      .subscribe(() => {
        this.modalServices.close();
      });
  }
}
