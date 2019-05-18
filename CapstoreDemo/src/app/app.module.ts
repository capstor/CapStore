import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { ViewMerComponent } from './view-mer/view-mer.component';
import { ViewCustComponent } from './view-cust/view-cust.component';
import { MerLogRegComponent } from './mer-log-reg/mer-log-reg.component';
import { CustLogRegComponent } from './cust-log-reg/cust-log-reg.component';
import { LipstickComponent } from './lipstick/lipstick.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoriesComponent,
    CartComponent,
    ProductComponent,
    AddMerchantComponent,
    ViewMerComponent,
    ViewCustComponent,
    MerLogRegComponent,
    CustLogRegComponent,
    LipstickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
