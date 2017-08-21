import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HousingComponent } from './housing/housing.component';
import { JobsComponent } from './jobs/jobs.component';
import { ForSaleComponent } from './for-sale/for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HousingComponent,
    JobsComponent,
    ForSaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
