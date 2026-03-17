import { createAction, props } from '@ngrx/store';
import { ITvShow } from '../../models/tv.model';
import { MoviesState } from '../movies/movies.state';

export const loadTvShows = createAction('[TV] Load TV Shows');
export const loadTvShowsSuccess = createAction(
  '[TV] Load TV Shows Success',
  props<{ tvShows: ITvShow[] }>(),
);
export const setTvFilter = createAction(
  '[TV] Set TV Shows Filter',
  props<{ filter: Partial<MoviesState['filter']> }>(),
);
