import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service';
import { MovieFilter, MoviesState } from './movies.state';
export const MoviesStore = signalStore(
  { providedIn: 'root' },

  withState<MoviesState>({
    movies: [],
    filter: { search: '', genreIds: [], adult: null, voteRange: [0, 10] },
    loading: false,
  }),

  withProps(() => ({
    api: inject(ApiService),
  })),

  withMethods((store) => ({
    loadMovies: rxMethod<'popular' | 'top-rated'>((type$) => {
      return type$.pipe(
        tap(() => patchState(store, { loading: true, movies: [] })),
        switchMap((type) =>
          type === 'popular' ? store.api.getPopularMovies() : store.api.getTopRatedMovies(),
        ),
        tap({
          next: (res) => patchState(store, { movies: res.results, loading: false }),
        }),
      );
    }),

    setFilter(filter: Partial<MovieFilter>) {
      patchState(store, { filter: { ...store.filter(), ...filter } });
    },
  })),

  withComputed((store) => ({
    filteredMovies: computed(() => {
      const movies = store.movies();
      const { search, genreIds, adult, voteRange } = store.filter();

      return movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(search.toLowerCase()) &&
          (genreIds.length === 0 || movie.genre_ids.some((id) => genreIds.includes(id))) &&
          (adult === null || movie.adult === adult) &&
          movie.vote_average >= voteRange[0] &&
          movie.vote_average <= voteRange[1]
        );
      });
    }),
  })),
);
