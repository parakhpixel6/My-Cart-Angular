import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
// import { AppRoutingModule } from './app-routing.module';

//Import Component
import { AppComponent } from './app.component';
// import { MyComponentComponent } from './my-component/my-component.component';
// import { ManualComponent } from "./manual/manual.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  // Declarations or register component
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      // upr intital router mein single inverted comma ke bich space nhi rhena chahiye
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component:  CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],

  //provide bootstraping
  bootstrap: [AppComponent]
})
export class AppModule { }
