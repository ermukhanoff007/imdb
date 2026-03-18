import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { FilmsPage } from './pages/films-page/films-page';
import { SeriesPage } from './pages/series-page/series-page';
import { FilmCard } from './components/film-card/film-card';
import { SeriesCard } from './components/series-card/series-card';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'films',
    component: FilmsPage,
  },
  {
    path: 'films/:id',
    component: FilmCard,
  },
  {
    path: 'film/top-rate',
    component: FilmsPage,
  },
  {
    path: 'series',
    component: SeriesPage,
  },
  {
    path: 'serie/top-rate',
    component: SeriesPage,
  },
  {
    path: 'series/:id',
    component: SeriesCard,
  },
];
