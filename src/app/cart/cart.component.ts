import { Component } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  //This code sets the items using the CartService getItems() method. You defined this method  when u created cart.service.ts
  items = this.cartService.getItems( );

  checkOutForm = this.formBuilder.group({
    name: ' ',
    address: ' ',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,

  ) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('You Order was placed successfully', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
