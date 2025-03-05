import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPage} from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'invoice',
        loadComponent: () => import('./empty/empty.component').then((m) => m.EmptyComponent),
      },
      {
        path: 'card',
        loadComponent: () => import('./empty/empty.component').then((m) => m.EmptyComponent),
      },
      {
        path: 'shop',
        loadComponent: () => import('./empty/empty.component').then((m) => m.EmptyComponent),
      },
      {
        path: '',
        redirectTo: '/main/dashboard',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {
}
