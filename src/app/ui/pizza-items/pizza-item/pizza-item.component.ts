import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.sass']
})
export class PizzaItemComponent {
  @Input() product!: Product;
}
