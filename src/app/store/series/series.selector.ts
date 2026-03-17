import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TvState } from './series.state';

export const selectTvState = createFeatureSelector<TvState>('tv');

export const selectAllTvShows = createSelector(selectTvState, (state) => state.tvShows);
export const selectTvFilter = createSelector(selectTvState, (state) => state.filter);

export const selectFilteredTvShows = createSelector(
  selectAllTvShows,
  selectTvFilter,
  (tvShows, filter) =>
    tvShows.filter((tv) => tv.name.toLowerCase().includes(filter.search.toLowerCase())),
);
