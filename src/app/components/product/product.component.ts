import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductServises } from 'src/app/services/products.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: IProduct;
  details = false;

  constructor(private productService: ProductServises) {} // Ініціалізуйте сервіс

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(
      () => {
        // Додайте код, який повинен виконуватися після успішного видалення
        console.log('Product deleted successfully');
      },
      (error) => {
        // Додайте обробку помилок
        console.error('Error deleting product:', error);
      }
    );
  }
}
