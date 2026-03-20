import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { TVSeriesFilter, TvState } from './series.state';
import { computed, inject } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, tap } from 'rxjs/operators';

export const TvSeriesStore = signalStore(
  { providedIn: 'root' },
  withState<TvState>({
    tvShows: [],
    filter: { search: '', genreIds: [], voteRange: [0, 10] },
    loading: false,
  }),
  withMethods((store, api = inject(ApiService)) => ({
    loadSeries: rxMethod<'popular' | 'top-rated'>((type$) => {
      return type$.pipe(
        tap(() => patchState(store, { loading: true, tvShows: [] })),
        switchMap((type) =>
          type === 'popular' ? api.getPopularTVSeries() : api.getTopRatedTVSeries(),
        ),
        tap({
          next: (res) => patchState(store, { tvShows: res.results, loading: false }),
        }),
      );
    }),

    setFilter(filter: Partial<TVSeriesFilter>) {
      patchState(store, { filter: { ...store.filter(), ...filter } });
    },
  })),
  withComputed((store) => ({
    filteredSeries: computed(() =>
      store.tvShows().filter((show) => {
        const { search, genreIds, voteRange } = store.filter();
        console.log('genreIds:', genreIds);
        console.log('show.genre_ids:', show.genre_ids);
        console.log('typeof show.genre_ids[0]:', typeof show.genre_ids[0]);
        console.log('typeof genreIds[0]:', typeof genreIds[0]);
        return (
          show.name.toLowerCase().includes(search.toLowerCase()) &&
          (genreIds.length === 0 ||
            show.genre_ids.some((id) => genreIds.map(Number).includes(id))) &&
          show.vote_average >= voteRange[0] &&
          show.vote_average <= voteRange[1]
        );
      }),
    ),
  })),
);
