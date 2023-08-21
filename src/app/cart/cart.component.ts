import { Component } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  //This code sets the items using the CartService getItems() method. You defined this method  when u created cart.service.ts
  items = this.cartService.getItems( );
  constructor(
    private cartService: CartService
  ) { }
}
