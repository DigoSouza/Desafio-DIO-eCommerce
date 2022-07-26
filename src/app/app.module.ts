import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { BookstoreAppComponent } from './componentes/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './componentes/bookstore-app/filters/filters.component';
import { ProductListComponent } from './componentes/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './componentes/bookstore-app/product-list/product-item/product-item.component';
import { BooksService } from './componentes/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
