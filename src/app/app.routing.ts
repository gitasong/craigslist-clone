import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HousingComponent } from './housing/housing.component';
import { JobsComponent } from './jobs/jobs.component';
import { ForSaleComponent } from './for-sale/for-sale.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
