import { createReducer, on } from '@ngrx/store';
import { initialState } from './series.state';
import * as TvActions from './series.action';

export const tvReducer = createReducer(
  initialState,
  on(TvActions.loadTvShows, (state) => ({ ...state, loading: true })),
  on(TvActions.loadTvShowsSuccess, (state, { tvShows }) => ({ ...state, tvShows, loading: false })),
  on(TvActions.setTvFilter, (state, { filter }) => ({
    ...state,
    filter: { ...state.filter, ...filter },
  })),

  on(TvActions.loadTopSeries, (state) => ({ ...state, loading: true })),
  on(TvActions.loadTopSeriesSuccess, (state, { tvShows }) => ({
    ...state,
    tvShows,
    loading: false,
  })),

  on(TvActions.resetFilter, (state) => ({
    ...state,
    filter: { search: '', genreIds: [], voteRange: [0, 10] },
  })),
);
