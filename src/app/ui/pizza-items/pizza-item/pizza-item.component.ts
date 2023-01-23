import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Product } from '../../../models/product.model';
import { ImageModalComponent } from '../../image-modal/image-modal.component';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.sass']
})
export class PizzaItemComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(ImageModalComponent, {
      autoFocus: false,
      panelClass: 'custom-dialog-container',
      data: { data: this.product },
    });
  }
}
