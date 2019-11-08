import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { DynamicLinkComponent } from "./dynamic-link/dynamic-link.component";
import { TimeService } from "./services/time.service";
import { Cart2Component } from "./cart2/cart2.component";
import { Cart2Guard } from "./guards/cart2.guard";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "cart", component: CartComponent },
      { path: "cart2", component: Cart2Component, canActivate: [Cart2Guard] }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    DynamicLinkComponent,
    Cart2Component
  ],
  bootstrap: [AppComponent],
  providers: [TimeService, Cart2Guard]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
