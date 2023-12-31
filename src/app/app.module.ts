import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
