import { Routes } from '@angular/router';
import { HomeComponent } from './tab1/tab1components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];