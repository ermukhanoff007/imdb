import { createReducer, on } from '@ngrx/store';
import { initialState } from './movies.state';
import * as MoviesActions from './movies.action';

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => ({ ...state, loading: true })),
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
  })),
  on(MoviesActions.setMovieFilter, (state, { filter }) => ({
    ...state,
    filter: { ...state.filter, ...filter },
  })),
);
