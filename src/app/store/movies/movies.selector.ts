import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.state';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectAllMovies = createSelector(selectMoviesState, (state) => state.movies);
export const selectMovieFilter = createSelector(selectMoviesState, (state) => state.filter);

export const selectFilteredMovies = createSelector(
  selectAllMovies,
  selectMovieFilter,
  (movies, filter) =>
    movies.filter((movie) => movie.title.toLowerCase().includes(filter.search.toLowerCase())),
);
