import { createAction, props } from '@ngrx/store';
import { IMovie } from '../../models/movie.model';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: IMovie[] }>(),
);
export const setMovieFilter = createAction(
  '[Movies] Set Movie Filter',
  props<{ filter: { search: string } }>(),
);
