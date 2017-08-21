import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
