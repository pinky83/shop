import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './products/components/first/first.component';
import { ProductComponent } from './products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
