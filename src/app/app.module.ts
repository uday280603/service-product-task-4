import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { ProductCardComponent } from './shared/component/product-card/product-card.component';
import { MaterialModule } from './shared/module/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
