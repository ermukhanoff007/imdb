import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { ApiService } from '../../services/api-service';
import * as MoviesActions from './movies.action';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private api = inject(ApiService);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(() =>
        this.api.getPopularMovies().pipe(
          map((res) => {
            return MoviesActions.loadMoviesSuccess({ movies: res.results });
          }),
        ),
      ),
    ),
  );
  loadTopMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadTopMovies),
      switchMap(() =>
        this.api
          .getTopRatedMovies()
          .pipe(map((res) => MoviesActions.loadTopMoviesSuccess({ movies: res.results }))),
      ),
    ),
  );
}
