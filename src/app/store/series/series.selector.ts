import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TvState } from './series.state';

export const selectTvState = createFeatureSelector<TvState>('tv');

export const selectAllTvShows = createSelector(selectTvState, (state) => state?.tvShows || []);
export const selectTvFilter = createSelector(
  selectTvState,
  (state) => state?.filter ?? { search: '', genreIds: [], voteRange: [0, 10] },
);

export const selectFilteredTvShows = createSelector(
  selectAllTvShows,
  selectTvFilter,
  (series, filter) => {
    return series.filter((series) => {
      const matchSearch = series.name.toLowerCase().includes(filter.search.toLowerCase());

      const matchGenres =
        filter.genreIds.length === 0 ||
        filter.genreIds.some((genreId) => series.genre_ids.includes(genreId));

      const matchVote =
        series.vote_average >= filter.voteRange[0] && series.vote_average <= filter.voteRange[1];

      return matchSearch && matchGenres && matchVote;
    });
  },
);
