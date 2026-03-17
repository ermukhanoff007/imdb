import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { ApiService } from '../../services/api-service';
import * as TvActions from './series.action';

@Injectable()
export class TvEffects {
  private actions$ = inject(Actions);
  private api = inject(ApiService);

  loadTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvActions.loadTvShows),
      switchMap(() =>
        this.api
          .getPopularTVSeries()
          .pipe(map((res) => TvActions.loadTvShowsSuccess({ tvShows: res.results }))),
      ),
    ),
  );
  loadTopTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvActions.loadTopSeries),
      switchMap(() =>
        this.api
          .getTopRatedTVSeries()
          .pipe(map((res) => TvActions.loadTopSeriesSuccess({ tvShows: res.results }))),
      ),
    ),
  );
}
