import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SeriesList } from '../../components/series-list/series-list';
import { Store } from '@ngrx/store';

import { selectFilteredTvShows } from '../../store/series/series.selector';
import { resetFilter } from '../../store/series/series.action';
import { loadTopSeries, loadTvShows } from '../../store/series/series.action';
import { FilterSeriesComponent } from '../../components/filter-series-component/filter-series-component';

@Component({
  selector: 'app-films-page',
  imports: [AsyncPipe, SeriesList, FilterSeriesComponent],
  templateUrl: './series-page.html',
  styleUrl: './series-page.scss',
})
export class SeriesPage implements OnInit {
  private router = inject(Router);
  private store = inject(Store);

  title = signal<string>('');

  series$ = this.store.select(selectFilteredTvShows);

  ngOnInit(): void {
    const url = this.router.url;

    this.store.dispatch(resetFilter());

    if (url.includes('top-rate')) {
      this.title.set('Top Series');
      this.store.dispatch(loadTopSeries());
    } else {
      this.title.set('Popular Series');
      this.store.dispatch(loadTvShows());
    }
  }
}
