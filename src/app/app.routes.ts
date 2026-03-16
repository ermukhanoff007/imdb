import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { FilmsPage } from './pages/films-page/films-page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'films',
    component: FilmsPage,
  },
];
