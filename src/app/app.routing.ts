import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HousingComponent } from './housing/housing.component';
import { JobsComponent } from './jobs/jobs.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
