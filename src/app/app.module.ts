import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { productListComponent} from './productList/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    productListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [productListComponent]
})
export class AppModule { }
