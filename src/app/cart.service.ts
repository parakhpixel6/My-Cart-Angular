// In Angular, a service is an instance of a class that u can make available to any part of ur application using's Angular's Dependency Injection System
// "ng generate service cart" is the command which generate two file i.e cart.service.spec.ts
// & cart.service.ts 

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Product } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[ ] = [ ];
  constructor(
    private http: HttpClient,
  ) {}

  // let we define the methods to add items to the cart, return cart items, & clear the items from the cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart( ) {
    this.items = [ ];
    return this.items;
  }

  getShippingPrices( ) {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
