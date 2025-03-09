import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Basicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'number',
    title: 'Numbers Pipe',
    loadComponent: () => import('./pages/number-page/number-page.component'),
  },
  {
    path: 'custom',
    title: 'Custom Pipe',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipe',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
