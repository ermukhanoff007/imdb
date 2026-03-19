import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service';
import { MovieFilter, MoviesState } from '../../store/movies/movies.state';

export const MoviesStore = signalStore(
  { providedIn: 'root' },

  withState<MoviesState>({
    movies: [],
    filter: { search: '', genreIds: [], adult: null, voteRange: [0, 10] },
    loading: false,
  }),

  withMethods((store, api = inject(ApiService)) => ({
    loadPopular: rxMethod(() =>
      api.getPopularMovies().pipe(
        tap({
          next: (res) => patchState(store, { movies: res.results, loading: false }),
        }),
      ),
    ),

    loadTopRatedMovies: rxMethod(() =>
      api.getTopRatedMovies().pipe(
        tap({
          next: (res) => patchState(store, { movies: res.results, loading: false }),
        }),
      ),
    ),

    setFilter(filter: Partial<MovieFilter>) {
      patchState(store, { filter: { ...store.filter(), ...filter } });
    },
  })),

  withComputed((store) => ({
    filteredMovies: () =>
      store.movies().filter((movie) => {
        const { search, genreIds, adult, voteRange } = store.filter();
        return (
          movie.title.toLowerCase().includes(search.toLowerCase()) &&
          (genreIds.length === 0 || movie.genre_ids.some((id) => genreIds.includes(id))) &&
          (adult === null || movie.adult === adult) &&
          movie.vote_average >= voteRange[0] &&
          movie.vote_average <= voteRange[1]
        );
      }),
  })),
);
