import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelpersService } from '../../services/helpers.service';
import { MESSAGES } from '../../constants';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})
export class OrderFormComponent {
  @ViewChild('f') form!: NgForm;

  constructor(private readonly helpers: HelpersService) {
  }

  onSubmit() {
    this.helpers.openSnackBar(MESSAGES.orderCreated);
  }
}
