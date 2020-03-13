import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { Ban1Component } from './layout/ban1/ban1.component';
import { ProductsComponent } from './layout/products/products.component';
import { Ban2Component } from './layout/ban2/ban2.component';
import { ContactComponent } from './layout/contact/contact.component';
import { Ban3Component } from './layout/ban3/ban3.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { BooksComponent } from './products/books/books.component';
import { BikesComponent } from './products/bikes/bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Ban1Component,
    ProductsComponent,
    Ban2Component,
    ContactComponent,
    Ban3Component,
    FooterComponent,
    MobPartComponent,
    BooksComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
