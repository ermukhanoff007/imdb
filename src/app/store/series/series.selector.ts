import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TvState } from './series.state';

export const selectTvState = createFeatureSelector<TvState>('tv');

export const selectAllTvShows = createSelector(selectTvState, (state) => state.tvShows);
export const selectTvFilter = createSelector(selectTvState, (state) => state.filter);

export const selectFilteredTvShows = createSelector(
  selectAllTvShows,
  selectTvFilter,
  (seriies, filter) => {
    return seriies.filter((seriies) => {
      const matchSearch = seriies.name.toLowerCase().includes(filter.search.toLowerCase());

      const matchGenres =
        filter.genreIds.length === 0 ||
        filter.genreIds.some((genreId) => seriies.genre_ids.includes(genreId));

      const matchVote =
        seriies.vote_average >= filter.voteRange[0] && seriies.vote_average <= filter.voteRange[1];

      return matchSearch && matchGenres && matchVote;
    });
  },
);
