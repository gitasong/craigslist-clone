import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HousingComponent } from './housing/housing.component';
import { JobsComponent } from './jobs/jobs.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { PersonalsComponent } from './personals/personals.component';
import { ServicesComponent } from './services/services.component';

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
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
