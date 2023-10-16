import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get title() {
    return this.form.controls.title as FormControl;
  }
  constructor() {}

  ngOnInit(): void {
    // Initialization logic can be added here if required
  }

  submit() {
    this.title;
    console.log(this.form.value);
  }
}
