import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductComponent,
    FiltersComponent,
    ProductfilterComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    NgbModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
