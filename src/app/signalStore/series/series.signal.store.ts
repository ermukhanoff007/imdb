import { signalStore, withMethods, withState } from '@ngrx/signals';
import { TvState } from '../../store/series/series.state';
import { inject } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export const TvSeriesStore = signalStore(
  { providedIn: 'root' },
  withState<TvState>({
    tvShows: [],
    filter: { search: '', genreIds: [], voteRange: [0, 10] },
    loading: false,
  }),
  withMethods((store, api = inject(ApiService)) => ({
    loadPopular: rxMethod(),
  })),
);
