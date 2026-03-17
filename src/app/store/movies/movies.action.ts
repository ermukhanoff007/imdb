import { createAction, props } from '@ngrx/store';
import { IMovie } from '../../models/movie.model';
import { MoviesState } from './movies.state';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: IMovie[] }>(),
);
export const setMovieFilter = createAction(
  '[Movies] Set Movie Filter',
  props<{ filter: Partial<MoviesState['filter']> }>(),
);

export const loadTopMovies = createAction('[Movies] Load Top Movies');
export const loadTopMoviesSuccess = createAction(
  '[Movies] Load Top MoviesSuccess',
  props<{ movies: IMovie[] }>(),
);
export const resetFilter = createAction('[Movies] Reset Filter');
