import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.state';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const selectAllMovies = createSelector(selectMoviesState, (state) => state?.movies ?? []);
export const selectMovieFilter = createSelector(
  selectMoviesState,
  (state) => state?.filter ?? { search: '', genreIds: [], adult: null, voteRange: [0, 10] },
);
export const selectFilteredMovies = createSelector(
  selectAllMovies,
  selectMovieFilter,
  (movies, filter) => {
    return movies.filter((movie) => {
      const matchSearch = movie.title.toLowerCase().includes(filter.search.toLowerCase());

      const matchGenres =
        filter.genreIds.length === 0 ||
        filter.genreIds.some((genreId) => movie.genre_ids.includes(genreId));

      const adult = filter.adult === null || filter.adult === movie.adult;

      const matchVote =
        movie.vote_average >= filter.voteRange[0] && movie.vote_average <= filter.voteRange[1];

      return matchSearch && matchGenres && adult && matchVote;
    });
  },
);
