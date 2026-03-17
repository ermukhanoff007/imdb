import { createAction, props } from '@ngrx/store';
import { ITvShow } from '../../models/tv.model';
import { TvState } from './series.state';

export const loadTvShows = createAction('[TV] Load TV Shows');
export const loadTvShowsSuccess = createAction(
  '[TV] Load TV Shows Success',
  props<{ tvShows: ITvShow[] }>(),
);
export const setTvFilter = createAction(
  '[TV] Set TV Shows Filter',
  props<{ filter: Partial<TvState['filter']> }>(),
);

export const loadTopSeries = createAction('[TV] Load Top TV Series');
export const loadTopSeriesSuccess = createAction(
  '[TV] Load Top TV Series Success',
  props<{ tvShows: ITvShow[] }>(),
);
export const resetFilter = createAction('[TV] Reset Filter');
